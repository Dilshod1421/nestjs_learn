import { Controller, Get, Redirect, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class APPController {
    constructor(private readonly appService: AppService) { }

    @Get('hello')
    getHello(): string {
        return this.appService.getHello();
    };

    @Get('docs')
    @Redirect('https://google.com/?query=nestjs', 302)
    getDocs(@Query('site') site: string) {
        if (site && site === 'abudev') {
            return { url: 'http://t.me/chiqish_yoli' }
        };
    };
}