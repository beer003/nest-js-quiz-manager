import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}   //This is a dependency injection, only possible because app service has @Injectable()

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/something')
  getSomething(): string{
    return this.appService.getSomething();
  }
}
