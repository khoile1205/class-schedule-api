import { Role } from "@/common/enums/roles.enum";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, ObjectId } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
	_id: ObjectId;

	@Prop({ required: true, default: "default" })
	firstName: string;

	@Prop({ required: true, default: "default" })
	lastName: string;

	@Prop({ required: true })
	email: string;

	@Prop({ required: true })
	username: string;

	@Prop({ required: true })
	password: string;

	@Prop({ required: true })
	role: Role;

	@Prop({ required: true })
	location: string;

	@Prop({ required: true })
	phoneNumber: string;

	@Prop({ required: true })
	avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
