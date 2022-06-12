import { IsNotEmpty, IsString } from 'class-validator';
export class AdsAPIDto {
  @IsString()
  @IsNotEmpty()
  accessToken: string;

  @IsString()
  @IsNotEmpty()
  accountId: string;
}
