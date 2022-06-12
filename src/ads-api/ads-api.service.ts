import { Injectable } from '@nestjs/common';
import adsSdk from 'facebook-nodejs-business-sdk';
import { AdsAPIDto } from './dto';

@Injectable()
export class AdsApiService {
  init(dto: AdsAPIDto) {
    const AdAccount = adsSdk.AdAccount;
    const account = new AdAccount(`act_${dto.accountId}`);

    return account;
  }
}
