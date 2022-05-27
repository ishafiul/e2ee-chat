import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type AuthDocument = Auth & Document;
@Schema({
  strict: false,
  timestamps: true,
})
export class Auth {
  @Prop({ type: String })
  email: string;
}
const schema = SchemaFactory.createForClass(Auth);

export const AuthModel = { name: Auth.name, schema };
