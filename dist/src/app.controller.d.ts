import { AppService } from './app.service';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getRoot(res: Response): Response<any, Record<string, any>>;
    getApi(res: Response): Response<any, Record<string, any>>;
}
