import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AuthDocument, AuthModel } from '../schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(AuthModel.name)
    private readonly AuthModel: Model<AuthDocument>,
  ) {}
  async create(createAuthDto: CreateAuthDto) {
    const duplicateUser = await this.AuthModel.findOne({
      email: createAuthDto.email,
    }).exec();
    if (duplicateUser) {
      console.log(duplicateUser);
      throw new HttpException(
        {
          statusCode: HttpStatus.FORBIDDEN,
          message: 'User With This Email Already Exist!',
        },
        HttpStatus.FORBIDDEN,
      );
    } else {
      await this.AuthModel.create({
        email: createAuthDto.email,
      });
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
