import { Controller, Post, Put, Get, Delete, Param, Query, Body, UseGuards } from '@nestjs/common';

import { AdsService } from './ads.service';
import { InputCampaignDto, ParamCampaignDto, AlterCampaignDto } from './dto'
import { UpdateCampaignDto } from './dto/campaign.dto';

@Controller('ads')
export class AdsController {
  constructor(private adsService: AdsService) { }

  @Get()
  getCampaign(@Query() dto: ParamCampaignDto) {
    return this.adsService.readCampaign(dto)
  }

  @Post()
  createCampaign(
    @Query() param: ParamCampaignDto,
    @Body() dto: InputCampaignDto
  ) {
    return this.adsService.createCampaign(param, dto)
  }

  @Post('update')
  updateCampaign(
    @Query() param: AlterCampaignDto,
    @Body() dto: UpdateCampaignDto
  ) {
    return this.adsService.updateCampaign(param, dto)
  }

  @Delete()
  removeCampaign(
    @Query() dto: AlterCampaignDto
  ) {
    return this.adsService.deleteCampaign(dto)
  }
}
