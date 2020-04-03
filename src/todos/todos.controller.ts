import { Controller, Get } from '@nestjs/common';

@Controller('todos')
export class TodosController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }
}
