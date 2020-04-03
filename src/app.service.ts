import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'The good work!';
  }
  getSomeText():string{
    return 'Some text'
  }
}
