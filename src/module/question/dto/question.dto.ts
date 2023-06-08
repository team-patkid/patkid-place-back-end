import { Type } from 'class-transformer';
import { IsArray, IsDefined, IsEnum, IsString } from 'class-validator';
import { AnswerType, QuestionType } from '../question.schema';

export class GetQuestionListResponse {
  @IsEnum(QuestionType)
  @IsDefined()
  public type: QuestionType;

  @IsArray()
  @IsDefined()
  @Type(() => Array<QuestionDto>)
  public question: Array<QuestionDto>;
}

export class AnswerDto {
  @IsEnum(AnswerType)
  @IsDefined()
  public type: AnswerType;
  
  @IsString()
  @IsDefined()
  public comment: string;
}

export class QuestionDto {
  @IsString()
  @IsDefined()
  public comment: string;

  @IsArray()
  @IsDefined()
  @Type(() => Array<AnswerDto>)
  public answer: Array<AnswerDto>;
}