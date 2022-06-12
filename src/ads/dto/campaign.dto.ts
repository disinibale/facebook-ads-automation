import { Transform } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { toNumber } from 'src/common/helper/cast.helper';

export class IdCampaignDto {
  @Transform(({value}) => toNumber(value, { default: 1, min: 1}))
  @IsNumber()
  @IsNotEmpty()
  campaignId: string;
}

export class ParamCampaignDto {
  @IsString()
  @IsNotEmpty()
  accessToken: string

  @Transform(({value}) => toNumber(value, { default: 1, min: 1}))
  @IsNumber()
  @IsNotEmpty()
  accountId: number
}

export class AlterCampaignDto {
  @IsString()
  @IsNotEmpty()
  accessToken: string
  
  @Transform(({value}) => toNumber(value, { default: 1, min: 1}))
  @IsNumber()
  @IsNotEmpty()
  campaignId: number
}

export class InputCampaignDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  objective: string

  @IsString()
  @IsNotEmpty()
  status: string

  @IsArray()
  @IsNotEmpty()
  special_ad_categories: string
}

export class UpdateCampaignDto {
  @IsString()
  @IsOptional()
  name: string

  @IsString()
  @IsOptional()
  objective: string

  @IsString()
  @IsOptional()
  status: string

  @IsArray()
  @IsOptional()
  special_ad_categories: string
}