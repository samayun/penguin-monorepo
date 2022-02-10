import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './environments/environment';
import { TaskModule } from './task/task.module';
import { PetsModule } from './pets/pets.module';

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
        TaskModule,
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
            database: env.mongodb.MONGODB_DATABASE,
            entities: [__dirname + 'src/**/*.entity{.ts,.js}'],
            ssl: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }),
        PetsModule,
    ],
})
export class AppModule {}
