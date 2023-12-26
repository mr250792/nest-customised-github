import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { BookModule } from './books/book.module';
import { BookController } from './books/book.controller';
import { BookService } from './books/book.service';
import { JweleryModule } from './jwelery/jwelery.module';
import { JweleryService } from './jwelery/jwelery.service';
import { EngineerController } from './engineer/engineer.controller';
import { EngineerService } from './engineer/engineer.service';

@Module({
    imports: [RootModule, HttpModule, BookModule, JweleryModule],
    controllers: [BookController, EngineerController],
    providers: [RootModule, BookService, JweleryService, EngineerService],
    exports: [],
})
export class RootModule {
    constructor() {
        console.log('App Module');
    }
}
