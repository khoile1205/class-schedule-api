import { Role } from "@prisma/client";
import { ObjectId } from "mongoose";
import { User } from "./mongo.schema/user.schema";

export type UserEntity = Omit<User, "_id" | "password"> & {
	_id: string | ObjectId;
	password?: string;
};
