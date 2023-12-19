import { UserEntity } from "@/modules/user/entity";
import { UserToken } from "./mongo.schema/user.token.schema";

export type UserTokenEntity = Omit<UserToken, "_id" | "userId"> & {
	_id?: string;
	userId: UserEntity | string;
};
