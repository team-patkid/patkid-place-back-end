import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserResultDocument = HydratedDocument<UserResult>;

@Schema({
  timestamps: true,
  collection: 'USER_RESULT',
  _id: true,
})
export class UserResult {
  @Prop({ required: true })
  public mbti: string;
}

export const UserResultSchema = SchemaFactory.createForClass(UserResult);