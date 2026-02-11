"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true
    }));
    await app.listen(3001);
    console.log('🚀 Сервер запущен на http://localhost:3001');
    console.log('   Маршруты: /blogs, /posts, /users, /testing/all-data');
}
bootstrap();
//# sourceMappingURL=main.js.map