import { Controller, Body, Post, HttpCode } from '@nestjs/common';
import { TransformerRequestDto } from './dto/request.dto';
import { TransformerService } from './transformer.service';

@Controller('/transform')
export class TransformerController {
  constructor(private readonly transformerService: TransformerService) {}

  @Post()
  @HttpCode(200)
  transformInput(@Body() request: TransformerRequestDto) {
    const { input } = request;
    return this.transformerService.transformInput(input);
  }
}
