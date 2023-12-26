import { Module } from '@nestjs/common';

@Module({
  providers: [],
})
export class BookModule {
  constructor() {
    console.log('Book module');
  }
}
