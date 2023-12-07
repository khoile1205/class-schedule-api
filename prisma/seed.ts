import { faker } from '@faker-js/faker'
import { PrismaClient, Role } from '@prisma/client'
const prisma = new PrismaClient()

// const user: UserEntity = {
//     avatar: faker.image.avatar(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     password: "$2a$12$RbN0V2ayY0hS8FX5Slzz.uK/hvVAyegInfyPlsYV2mba6TEZ16INa",
//     firstName: "Khoi",
//     lastName: "Le",
//     role: Role.Admin
// }

async function main() {
    // await prisma.users.create({ data: user })
}

main()