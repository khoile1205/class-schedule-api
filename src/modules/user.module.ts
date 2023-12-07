import { UserController } from "@/controllers";
import { User, UserSchema } from "@/core/entities/mongo/user.schema";
import { UserRepository } from "@/core/repository/mongo.user.repository";
import { UserService } from "@/services/user.service";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [UserController],
    providers: [UserService, UserRepository],
})

export class UserModule { }