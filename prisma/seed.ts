import { UserEntity } from "@/modules/user/entity";
import { UserToken, UserTokenEntity } from "@/modules/userToken/entity";
import { faker } from "@faker-js/faker";
import { Prisma, PrismaClient, Role } from "@prisma/client";
import { Mongoose } from "mongoose";
const prisma = new PrismaClient();

const user = {
	avatar: faker.image.avatar(),
	username: faker.internet.userName(),
	email: faker.internet.email(),
	// password: "$2a$12$RbN0V2ayY0hS8FX5Slzz.uK/hvVAyegInfyPlsYV2mba6TEZ16INa",
	firstName: "Khoi",
	lastName: "Le",
	role: Role.Admin,
	location: faker.location.city(),
	phoneNumber: faker.phone.number(),
};

const userToken: Prisma.userTokenCreateInput = {
	refresh_token:
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpZCI6IjY1NzJiODAxNWZhYjNhMzljNTU2MzcyOSIsImlhdCI6MTcwMjg5NTM5MywiZXhwIjoxNzAyODk1OTk3fQ.3vtMDmcSlDESo0jtkseym9D48tD8Oyl36LO1lbzLhx8",
	user: {
		connect: user,
	},
};

async function main() {
	// await prisma.users.create({ data: user });
	await prisma.userToken.create({
		data: userToken,
	});
}

main();
