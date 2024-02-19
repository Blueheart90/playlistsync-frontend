import { PrismaClient } from '@prisma/client'
import { encrypPassword } from '../utils/hashPassword'

const prisma = new PrismaClient()

async function main() {
  const password = await encrypPassword('test1234')
  const user = await prisma.user.upsert({
    where: { email: 'test@test.com' },
    update: {},
    create: {
      email: 'test@test.com',
      name: 'Test User 2',
      photo: 'test.jpg',
      password
    }
  })
  await prisma.user.upsert({
    where: { email: 'chuchober16@gmail.com' },
    update: {},
    create: {
      email: 'chuchober16@gmail.com',
      name: 'Test User 3',
      photo: 'test.jpg',
      password
    }
  })
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
