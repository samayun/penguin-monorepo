/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { globalPrefix, swaggerPrefix } from './config/api';
import serverConfig from './config/server';
import loadSwaggerModule from './swagger';

async function main() {
    const app = await NestFactory.create(AppModule);
    const { host, port } = serverConfig;

    app.setGlobalPrefix(globalPrefix);

    loadSwaggerModule(app);

    await app.listen(port);

    Logger.log(
        '\x1b[44m\x1b[47m\x1b[0m',
        `🚀 Application is running on: ${host}:${port}/${globalPrefix}`,
    );

    Logger.verbose(`🚀 Documentation is here =>  ${host}:${port}/${swaggerPrefix}`);
}

main();
