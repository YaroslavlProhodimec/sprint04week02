// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Убираем префикс для совместимости с тестами
  // app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors) => {
        const errorsMessages = errors.map((e) => ({
          message: e.constraints ? Object.values(e.constraints)[0] : 'Validation failed',
          field: e.property,
        }));
        return new BadRequestException({ errorsMessages });
      },
    }),
  );

  await app.listen(3001);
  console.log('🚀 Сервер запущен на http://localhost:3001');
  console.log('   Маршруты: /blogs, /posts, /users, /testing/all-data');
}
 bootstrap();