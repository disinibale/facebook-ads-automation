import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AlterCampaignDto, InputCampaignDto, ParamCampaignDto } from './dto';
import axios from 'axios'
import { ConfigService } from '@nestjs/config';
import { UpdateCampaignDto } from './dto/campaign.dto';

@Injectable({})
export class AdsService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService
  ) {
    return
  }

  async readCampaign(dto: ParamCampaignDto) {
    // &fields=id, name, objective, status, special_ad_categories
    try {
      const response = await axios.get(`https://graph.facebook.com/v14.0/act_${dto.accountId}/campaigns?access_token=${dto.accessToken}&fields=id, name`)
      return { status: response.status, response: response.data }
    } catch (e) { return e }
  }

  async readCampaignById(dto: AlterCampaignDto) {
    try {
      const response = await axios.get(`https://graph.facebook.com/v14.0/${dto.campaignId}?access_token=${dto.accessToken}`)
      return { status: response.status, response: response.data }
    } catch (e) { return e }
  }

  async createCampaign(dto: ParamCampaignDto, data: InputCampaignDto) {
    try {
      const response = await axios.post(`https://graph.facebook.com/v14.0/act_${dto.accountId}/campaigns?access_token=${dto.accessToken}`, data)
      console.log(response)
      return { status: response.status, response: response.data }
    } catch (e) { return e }        
  }

  async updateCampaign(dto: AlterCampaignDto, data: UpdateCampaignDto) {
    try {
      const response = await axios.post(`https://graph.facebook.com/v14.0/${dto.campaignId}?access_token=${dto.accessToken}`, data)
      return { status: response.status, response: response.data }
    } catch (e) { return e }
  }

  async deleteCampaign(dto: AlterCampaignDto) {
    try {
      const response = await axios.delete(`https://graph.facebook.com/v14.0/${dto.campaignId}?access_token=${dto.accessToken}`)
      return { status: response.status, response: response.data }
    } catch (e) { return e}
  }
}
