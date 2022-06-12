import { Module } from '@nestjs/common';
import { AdsModule } from './ads/ads.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { AdsApiModule } from './ads-api/ads-api.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AdsModule,
    AuthModule,
    PrismaModule,
    AdsApiModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
