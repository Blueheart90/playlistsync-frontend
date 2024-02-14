import { PrismaClient } from '@prisma/client'
import { encrypPassword } from '../utils/hashPassword'

const prisma = new PrismaClient()

async function main() {
  const password = await encrypPassword('test')
  const user = await prisma.user.upsert({
    where: { email: 'test@test.com' },
    update: {},
    create: {
      email: 'test@test.com',
      name: 'Test User',
      photo: 'test.jpg',
      password
    }
  })
  console.log({ user })
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
