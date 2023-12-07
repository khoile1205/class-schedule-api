import { IGenericRepository } from "./generic.repository.abstract";

export interface IUserRepository extends IGenericRepository<any> {
    updateSubjectTeacher(): Promise<any>;
}