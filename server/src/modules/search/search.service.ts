import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {
  search(): string {
    return 'Hello   //// SearchService!';
  }
}
