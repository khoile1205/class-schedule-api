export interface IGenericRepository<T> {
    getAllEntities(): Promise<T[]>;
    getEntityById(id: number): Promise<T>;
    createEntity(data: T): Promise<T>;
    updateEntityById(id: number, data: T): Promise<T>;
    deleteEntityById(id: number): Promise<T>;
}