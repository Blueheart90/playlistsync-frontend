import NextAuth from 'next-auth'

import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

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

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
          {
            method: 'POST',
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password
            }),
            headers: { 'Content-Type': 'application/json' }
          }
        )
        const user = await res.json()
        console.log({ user })

        if (user.status === 'error') throw user

        return user.data
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
        // check user exists

        // if dont exists create
      }

      return true
    }
  },
  pages: {
    signIn: '/login'
  }
})

export { handler as GET, handler as POST }
