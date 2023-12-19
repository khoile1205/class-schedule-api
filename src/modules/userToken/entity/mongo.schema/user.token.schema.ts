import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, ObjectId } from "mongoose";

export type UserTokenDocument = HydratedDocument<UserToken>;

@Schema({ timestamps: true })
export class UserToken {
	_id: ObjectId;

	@Prop({ required: true, ref: "User", type: "ObjectId" })
	userId: ObjectId;

	@Prop({ required: true })
	refreshToken: string;
}

export const UserTokenSchema = SchemaFactory.createForClass(UserToken);
