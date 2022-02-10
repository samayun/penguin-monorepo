export const env = {
    production: false,
    mysql: {
        DB_TYPE: 'mysql',
        DB_HOST: 'localhost',
        DB_PORT: 3306,
        DB_USERNAME: 'root',
        DB_PASSWORD: '',
        DB_DATABASE: 'ponnovai',
        DB_AUTO_LOAD_ENTITIES: true,
        DB_ENTITIES: [__dirname + '/**/*.entity{.ts,.js}'],
        DB_SYNCHRONIZE: true,
    },
    postgresql: {
        DB_TYPE: 'postgresql',
        DB_HOST: 'localhost',
        DB_PORT: 5432,
        DB_USERNAME: 'postgres',
        DB_PASSWORD: 'postgres',
        DB_DATABASE: 'task_management',
        DB_AUTO_LOAD_ENTITIES: true,
        DB_ENTITIES: [__dirname + '/**/*.entity{.ts,.js}'],
        DB_SYNCHRONIZE: true,
    },
    mongodb: {
        DB_TYPE: 'mongodb',
        MONGODB_CONNECTION_STRING:
            process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017',
        MONGODB_DATABASE: process.env.MONGODB_DATABASE || 'task_management',
    },
};
