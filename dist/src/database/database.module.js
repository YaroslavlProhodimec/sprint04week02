"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const database_init_service_1 = require("./database-init.service");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => {
                    const mongoUrl = configService.get('MONGO_URL') || process.env.MONGO_URL;
                    if (!mongoUrl) {
                        console.error('❌ MONGO_URL is not defined!');
                        console.error('Available env vars:', Object.keys(process.env).filter(k => k.includes('MONGO')));
                        throw new Error('MONGO_URL is not defined in environment variables');
                    }
                    console.log(`🔌 Подключение к MongoDB Atlas...`);
                    console.log(`📍 MongoDB URL: ${mongoUrl.substring(0, 30)}...`);
                    return {
                        uri: mongoUrl,
                    };
                },
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [database_init_service_1.DatabaseInitService],
        exports: [mongoose_1.MongooseModule],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map