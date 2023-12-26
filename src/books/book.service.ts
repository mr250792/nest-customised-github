import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  // add book

  addBook(): string {
    return 'Add a book';
  }

  deleteBook(): string {
    return 'delete a book';
  }

  updateBook(): string {
    return 'update a book';
  }

  findBooks(): string {
    return 'find all booksssssss';
  }
}
