import { Controller, Req, Post, HttpCode } from '@nestjs/common';
import { Request } from 'express';
import { TransformerService } from './transformer.service';

@Controller('/transform')
export class TransformerController {
  constructor(private readonly transformerService: TransformerService) { }

  @Post()
  @HttpCode(200)
  transformInput(@Req() request: Request) {
    const { body } = request;
    return this.transformerService.transformInput(body);
  }
}
