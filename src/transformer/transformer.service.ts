import { Injectable } from '@nestjs/common';

@Injectable()
export class TransformerService {
  transformInput(input: string) {
    const regex = /(?<![\w\d])dog(?![\w\d])/gi;

    return {
        output: input.replace(regex, 'cat')
    }
  }
}
