import { UserEntity } from "@/modules/user/entity";
import { UserToken, UserTokenEntity } from "@/modules/userToken/entity";
import { faker } from "@faker-js/faker";
import { Prisma, PrismaClient, Role } from "@prisma/client";
import { Mongoose } from "mongoose";
const prisma = new PrismaClient();

// const user = {
// 	avatar: faker.image.avatar(),
// 	username: faker.internet.userName(),
// 	email: faker.internet.email(),
// 	// password: "$2a$12$RbN0V2ayY0hS8FX5Slzz.uK/hvVAyegInfyPlsYV2mba6TEZ16INa",
// 	firstName: "Khoi",
// 	lastName: "Le",
// 	role: Role.Admin,
// 	location: faker.location.city(),
// 	phoneNumber: faker.phone.number(),
// };

const user = [
	{
		avatar: faker.image.avatar(),
		username: "test_teacher",
		email: faker.internet.email(),
		password: "$2a$12$RbN0V2ayY0hS8FX5Slzz.uK/hvVAyegInfyPlsYV2mba6TEZ16INa",
		firstName: "test_teacher",
		lastName: "test_teacher",
		role: Role.Student,
		location: faker.location.city(),
		phoneNumber: faker.phone.number(),
	},
	{
		avatar: faker.image.avatar(),
		username: "test_student",
		email: faker.internet.email(),
		password: "$2a$12$RbN0V2ayY0hS8FX5Slzz.uK/hvVAyegInfyPlsYV2mba6TEZ16INa",
		firstName: "test_student",
		lastName: "test_student",
		role: Role.Teacher,
		location: faker.location.city(),
		phoneNumber: faker.phone.number(),
	},
];
const studentUser = {
	avatar: faker.image.avatar(),
	username: "test_student",
	email: faker.internet.email(),
	password: "$2a$12$RbN0V2ayY0hS8FX5Slzz.uK/hvVAyegInfyPlsYV2mba6TEZ16INa",
	firstName: "test",
	lastName: "test",
	role: Role.Student,
	location: faker.location.city(),
	phoneNumber: faker.phone.number(),
};

const teacherUser = {
	avatar: faker.image.avatar(),
	username: "test_teacher",
	email: faker.internet.email(),
	password: "$2a$12$RbN0V2ayY0hS8FX5Slzz.uK/hvVAyegInfyPlsYV2mba6TEZ16INa",
	firstName: "test_teacher",
	lastName: "test_teacher",
	role: Role.Student,
	location: faker.location.city(),
	phoneNumber: faker.phone.number(),
};

const userTokens = [
	{
		refresh_token:
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpZCI6IjY1NzJiODAxNWZhYjNhMzljNTU2MzcyOSIsImlhdCI6MTcwMjg5NTM5MywiZXhwIjoxNzAyODk1OTk3fQ.3vtMDmcSlDESo0jtkseym9D48tD8Oyl36LO1lbzLhx8",
		user: {
			connect: studentUser,
		},
	},
	{
		refresh_token:
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpZCI6IjY1NzJiODAxNWZhYjNhMzljNTU2MzcyOSIsImlhdCI6MTcwMjg5NTM5MywiZXhwIjoxNzAyODk1OTk3fQ.3vtMDmcSlDESo0jtkseym9D48tD8Oyl36LO1lbzLhx8",
		user: {
			connect: teacherUser,
		},
	},
];
const users = [studentUser, teacherUser];

async function main() {
	// await Promise.all(users.map((user) => prisma.users.create({ data: user })));
	// await Promise.all(
	// 	userTokens.map(async (data) => {
	// 		const existedUser = await prisma.users.findUnique({
	// 			where: { username: data.user.connect.username },
	// 		});
	// 		if (existedUser) {
	// 			await prisma.userTokens.create({
	// 				data: {
	// 					refresh_token: data.refresh_token,
	// 					user: {
	// 						connect: {
	// 							id: existedUser.id,
	// 						},
	// 					},
	// 				},
	// 			});
	// 		}
	// 	})
	// );
}
main();
