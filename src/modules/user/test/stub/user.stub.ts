import { Role } from "@prisma/client";
import { UserEntity } from "../../entity";

export const createUserStub = (): UserEntity => {
	return {
		_id: "6572b8015fab3a39c5563729",
		username: "test",
		email: "Rhett49@gmail.com",
		firstName: "Khoi",
		lastName: "Le",
		location: "Luettgenstad",
		phoneNumber: "937-299-7998 x8043",
		avatar: "https://avatars.githubusercontent.com/u/73887643",
		password: "$2a$12$mrOMgGZ4TLx8xLpqjtXdqeBmlClhAoz5YBuKJPbk.L4o2urMFaX7G",
		role: Role.Admin,
	};
};
