import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type AuthDocument = User & Document;
@Schema({
  strict: false,
  timestamps: true,
})
export class User {
  @Prop({ type: String })
  email: string;
  @Prop({ type: String })
  password: string;
  @Prop({ type: String })
  passwordConfirm: string;
}
const schema = SchemaFactory.createForClass(User);

export const AuthModel = { name: User.name, schema };
