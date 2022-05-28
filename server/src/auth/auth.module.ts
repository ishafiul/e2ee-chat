import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthModel } from '../schema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

const MongooseModels = MongooseModule.forFeature([AuthModel]);
@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [MongooseModels],
})
export class AuthModule {}
