import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import supertokens from "supertokens-node";
import Session from 'supertokens-node/recipe/session';
import ThirdPartyEmailPassword from 'supertokens-node/recipe/thirdpartyemailpassword';

import { ConfigInjectionToken, AuthModuleConfig } from "../config.interface";

@Injectable()
export class SupertokensService {
    constructor(
        @Inject(ConfigInjectionToken) private config: AuthModuleConfig,
        @Inject(ConfigService) private appConfig: ConfigService
    ) {
        supertokens.init({
            appInfo: config.appInfo,
            supertokens: {
                connectionURI: config.connectionURI,
                apiKey: config.apiKey,
            },
            recipeList: [
                ThirdPartyEmailPassword.init({
                    providers: [
                        ThirdPartyEmailPassword.Google({
                            clientId: appConfig.get('GOOGLE_CLIENT_ID'),
                            clientSecret: appConfig.get('GOOGLE_CLIENT_SECRET')
                        }),
                        ThirdPartyEmailPassword.Facebook({
                            clientId: appConfig.get('FACEBOOK_CLIENT_ID'),
                            clientSecret: appConfig.get('FACEBOOK_CLIENT_SECRET'),
                        })
                    ]
                }),
                Session.init(),
            ]
        });
    }
}