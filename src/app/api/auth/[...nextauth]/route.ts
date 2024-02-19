import { prisma } from '../../../../../services/prisma'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { checkUser } from '@@/utils/checkUser'
import { encrypPassword, comparePassword } from '@@/utils/hashPassword'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'jsmith@hotmail.com'
        },
        password: { label: 'Password', type: 'password' }
      },

      async authorize(credentials, req) {
        // se debe retornar o un error o un null o el user

        // const res = await fetch(
        //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
        //   {
        //     method: 'POST',
        //     body: JSON.stringify({
        //       email: credentials?.email,
        //       password: credentials?.password
        //     }),
        //     headers: { 'Content-Type': 'application/json' }
        //   }
        // )
        // const user = await res.json()
        // console.log({ user })

        // if (user.status === 'error') throw user

        // return user.data

        if (!credentials?.email || !credentials.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user) {
          return null
        }

        const isPasswordValid = await checkUser(user, credentials.password)

        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.photo
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token as any
      return session
    },
    async signIn({ user, account, profile }) {
      if (account?.provider === 'google') {
        const { id, name, email, image } = user

        let userT
        let providerT

        await prisma.$transaction(async (tx) => {
          userT = await tx.user.upsert({
            where: { email },
            update: {
              name,
              photo: image
            },
            create: {
              email: 'chuchober16@gmail.com',
              name: 'Test User 33 trans',
              photo: 'test.jpg'
            }
          })

          providerT = await tx.provider.upsert({
            where: {
              userProvider: {
                name: account.provider.toUpperCase(),
                userId: userT.id
              }
            },
            update: {},
            create: {
              name: account.provider.toUpperCase(),
              providerAccountId: account.providerAccountId,
              userId: userT.id
            }
          })
        })
        console.log({ providerT })
      }

      return false
    }
  },
  pages: {
    signIn: '/login'
  }
})

export { handler as GET, handler as POST }
