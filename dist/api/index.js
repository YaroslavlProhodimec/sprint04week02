"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const app_module_1 = require("../src/app.module");
const express_1 = __importDefault(require("express"));
const common_1 = require("@nestjs/common");
let cachedApp;
async function createApp() {
    if (cachedApp) {
        return cachedApp;
    }
    const expressApp = (0, express_1.default)();
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressApp));
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        exceptionFactory: (errors) => {
            const errorsMessages = errors.map((e) => ({
                message: e.constraints ? Object.values(e.constraints)[0] : 'Validation failed',
                field: e.property,
            }));
            return new common_1.BadRequestException({ errorsMessages });
        },
    }));
    await app.init();
    cachedApp = expressApp;
    return expressApp;
}
async function handler(req, res) {
    const app = await createApp();
    return app(req, res);
}
//# sourceMappingURL=index.js.map