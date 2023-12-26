import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  //   public bookService: BookService = new BookService();

  constructor(private bookService: BookService) {}

  // add book
  @Post('/add')
  addBook(): string {
    return this.bookService.addBook();
  }

  // delete book
  @Delete('/delete')
  deleteBook(): string {
    return this.bookService.deleteBook();
  }

  // update book
  @Put('/update')
  updateBook(): string {
    return this.bookService.updateBook();
  }

  // find all book
  @Get('/findAll')
  findBooks(): string {
    return this.bookService.findBooks();
  }

  // find all book
  @Get('/findById/:bookId')
  // @ts-ignore
  findOne(@Param() params): string {
    console.log(params.bookId);
    return `this action retunrns ${params.bookId}`;
  }
}
