import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),

    AuthModule.forRoot({
      connectionURI: "https://96bcabd1ec8711ec97fb97966a1e3642-ap-southeast-1.aws.supertokens.io:3571",
      apiKey: "fb5-TG9NOwzglGCbl4x9AdoHZJgqmy",
      appInfo: {
        appName: process.env.APP_NAME,
        apiDomain: "http://localhost:5000",
        websiteDomain: "http://localhost:3000",
        apiBasePath: "/auth",
        websiteBasePath: "/auth"
      },
    }),
    PrismaModule,

  ],
  controllers: [AppController],
})

export class AppModule {}
