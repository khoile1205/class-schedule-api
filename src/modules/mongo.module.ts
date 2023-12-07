import configuration from "@/configuration";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forRootAsync({
            useFactory: () => ({
                uri: configuration().database.connectionString,
            })
        }),
    ],
})

export class MongoModule { }