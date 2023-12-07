import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Role } from '@prisma/client';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
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