/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function main() {
    const app = await NestFactory.create(AppModule);
    const globalPrefix = 'api/v1/';
    app.setGlobalPrefix(globalPrefix);
    const port = process.env.PORT || 3333;
    await app.listen(port);
    Logger.log(
        '\x1b[44m\x1b[47m\x1b[0m',
        `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
    );
}

main();
