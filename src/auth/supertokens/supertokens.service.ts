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
                            clientId: "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
                            clientSecret: "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"
                        }),
                        ThirdPartyEmailPassword.Facebook({
                           clientSecret: appConfig.get('FACEBOOK_CLIENT_SECRET'),
                           clientId: appConfig.get('FACEBOOK_CLIENT_ID')
                        })
                    ]
                }),
                Session.init(),
            ]
        });
    }
}