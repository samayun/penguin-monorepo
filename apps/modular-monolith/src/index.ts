import mainService from './main-service';
import analyticsService from './analytics-service';

const port = process.env.port || 3333;

async function bootstrap() {
    await mainService.listen(port);
    console.log(`Listening at http://localhost:${port}/api/gateway'`);
}

bootstrap();
