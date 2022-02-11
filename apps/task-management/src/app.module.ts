import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './environments/environment';
import { TaskModule } from './task/task.module';
import { PetsModule } from './pets/pets.module';
import { LessionModule } from './lession/lession.module';
import { Pet } from './pets/pet.entity';

export function response<T>(data: T, message: string) {
    return {
        success: true,
        message,
        data,
    };
}

export function reject(message: string) {
    return {
        success: false,
        message,
        data: null,
    };
}

@Module({
    imports: [
        PetsModule,
        // TypeOrmModule.forRoot({
        //     type: 'mysql',
        //     host: env.mysql.DB_HOST,
        //     port: env.mysql.DB_PORT,
        //     username: env.mysql.DB_USERNAME,
        //     password: env.mysql.DB_PASSWORD,
        //     database: env.mysql.DB_DATABASE,
        //     autoLoadEntities: true,
        //     entities: [__dirname + 'src/**/*.entity{.ts,.js}'],
        //     synchronize: true,
        // }),
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url: env.mongodb.MONGODB_CONNECTION_STRING,
            // database: env.mongodb.MONGODB_DATABASE,
            entities: [Pet],
            // ssl: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }),
        // LessionModule,
        // GraphQLModule.forRoot<ApolloDriverConfig>({
        //     driver: ApolloDriver,
        //     typePaths: ['./**/*.graphql'],
        // }),
    ],
})
export class AppModule {}
