import { Module } from '@nestjs/common';
import { TransformerController } from './transformer.controller';
import { TransformerService } from './transformer.service';

@Module({
  imports: [],
  controllers: [TransformerController],
  providers: [TransformerService],
})

export class TransformerModule {}
