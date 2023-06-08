import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { QuestionDto } from './dto/question.dto';

export type QuestionDocument = HydratedDocument<Question>;

export enum QuestionType {
  ENERGY = 'ENERGY',
  RECOGNITION = 'RECOGNITION',
  JUDGMENT = 'JUDGMENT',
  PLAN = 'PLAN',
}

export enum AnswerType {
  E = 'E',
  I = 'I',
  N = 'N',
  S = 'S',
  F = 'F',
  T = 'T',
  J = 'J',
  P = 'P',
}

@Schema({
  timestamps: true,  //자동으로 등록일, 수정일을 넣어줍니다.
  collection: 'QUESTION',
  _id: true,
})
export class Question {
  @Prop({ required: true })
  public type: QuestionType;

  @Prop({ _id: false, type:[{
	  comment: { _id: false, required: true, type: String },
    answer: { _id: false, required: true, type: [{
      type: { _id: false, required: true, type: String },
      comment: { _id: false, required: true, type: String },
    }] },
  }] })
  public question: Array<QuestionDto>;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);