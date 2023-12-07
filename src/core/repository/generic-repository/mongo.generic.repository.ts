import { Model } from "mongoose";
import { IGenericRepository } from "../abstract/generic.repository.abstract";

export class MongoGenericRepository<T> implements IGenericRepository<T> {

    private readonly _model: Model<T>
    private _populateOnPath: string[];

    constructor(model: Model<T>, populateOnPath: string[] = []) {
        this._model = model;
        this._populateOnPath = populateOnPath;
    }
    getAllEntities(): Promise<T[]> {
        return this._model.find({}).populate(this._populateOnPath).exec();
    }
    getEntityById(id: number): Promise<T> {
        return this._model.findById(id).populate(this._populateOnPath).exec() as Promise<T>;
    }
    createEntity(data: T): Promise<T> {
        return this._model.create(data);
    }
    updateEntityById(id: number, data: T): Promise<T> {
        return this._model.findByIdAndUpdate(id, data);
    }
    deleteEntityById(id: number): Promise<T> {
        return this._model.findByIdAndDelete(id);

    }





}