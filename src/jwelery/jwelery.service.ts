import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class JweleryService {
  constructor(private readonly httpService: HttpService) {}

  // find jwelery products from the products
  findAll() {
    return this.httpService.get('http://localhost:3002/api/products').pipe(
      map((response) => response.data),
      map(({ data }) => ({
        data: [...data.filter((item: any) => item.category === 'jewelery')],
        seasonCode: 'HR50',
      })),
    );
  }
}
