import { OnModuleInit } from '@nestjs/common';
import { Connection } from 'mongoose';
export declare class DatabaseInitService implements OnModuleInit {
    private connection;
    constructor(connection: Connection);
    onModuleInit(): void;
}
