import { Role } from "@prisma/client";

export interface UserEntity {
    avatar: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    role: Role;
    location: string;
    phoneNumber: string;
}