import { swaggerPrefix } from '@/config/api';
import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export default function LoadSwaggerModule(app: INestApplication) {
    const config = new DocumentBuilder()
        .setTitle('Penguin API')
        .setDescription('The pengo API description')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(swaggerPrefix, app, document);
}
