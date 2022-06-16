import { Controller, UseGuards, Get } from '@nestjs/common';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { AuthGuard } from './auth/auth.guard';
import { Session } from './auth/session.decorator';

@Controller('')
export class AppController {
    @Get('test')
    @UseGuards(AuthGuard)
    async getTest(@Session() session: SessionContainer): Promise<string> {
        return session.getSessionData()
    }
}
