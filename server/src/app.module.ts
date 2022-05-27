import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat.gateway';
import { AuthModule } from './auth/auth.module';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { _ConfigModule } from './config/config.module';
import { _ConfigService } from './config/config.service';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRootAsync({
      imports: [_ConfigModule],
      inject: [_ConfigService],
      useFactory: (appConfigService: _ConfigService) => {
        const options: MongooseModuleOptions = {
          uri: appConfigService.connectionString,
          useNewUrlParser: true,
          useUnifiedTopology: true,
        };
        return options;
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
