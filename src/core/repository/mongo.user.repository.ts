import { Injectable } from "@nestjs/common";
import { IUserRepository } from "./abstract/user.repository.interface";
import { IGenericRepository } from "./abstract";
import { UserEntity } from "../entities/user";

@Injectable()
export class UserRepository implements IUserRepository, IGenericRepository<UserEntity>{
    getAllEntities(): Promise<UserEntity[]> {
        console.log('ok')
        throw new Error("Method not implemented.");
    }
    getEntityById(id: number): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    createEntity(data: UserEntity): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    updateEntityById(id: number, data: UserEntity): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    deleteEntityById(id: number): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    updateSubjectTeacher(): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }

}