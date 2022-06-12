import { Module } from '@nestjs/common';
import { AdsApiService } from './ads-api.service';

@Module({
  providers: [AdsApiService],
  exports: [AdsApiService],
})
export class AdsApiModule {}
