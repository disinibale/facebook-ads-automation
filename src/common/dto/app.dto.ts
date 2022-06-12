import { Transform } from 'class-transformer';
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from 'class-validator';
import { toBoolean, toLowerCase, toNumber, trim, toDate } from '../helper/cast.helper';

export class QueryDto {
    @Transform(({ value }) => toNumber(value, { default: 1, min: 1 }))
    @IsNumber()
    @IsOptional()
    public page:number;

    @Transform(({ value }) => toBoolean(value))
    @IsBoolean()
    @IsOptional()
    public foo:boolean;

    @Transform(({ value }) => trim(value))
    @IsOptional()
    public bar: string;

    @Transform(({ value }) => toLowerCase(value))
    @IsOptional()
    public elon: string;

    @IsNumberString()
    @IsOptional()
    public musk: string;

    @Transform(({ value }) => toDate(value))
    @IsDate()
    @IsOptional()
    public date: Date;
}

export class SearchCampaignDto {
    @Transform(({value}) => toNumber(value, { default: 1, min: 1 }))
    @IsNumber()
    @IsNotEmpty()
    public accountId: number

    @IsString()
    @IsNotEmpty()
    public accessToken: string
}