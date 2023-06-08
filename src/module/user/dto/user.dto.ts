import { Type } from 'class-transformer';
import { IsArray, IsDefined, IsString } from 'class-validator';

export class ResultPlace {
  @IsString()
  @IsDefined()
  public image: string;

  @IsString()
  @IsDefined()
  public name: string;

  @IsArray()
  @IsDefined()
  public tag: Array<string>;

  @IsString()
  @IsDefined()
  public latitude: string;

  @IsString()
  @IsDefined()
  public longitude: string;

  @IsString()
  @IsDefined()
  public link: string;
}

export class InsertUserResultResponse {
  @IsString()
  @IsDefined()
  public _id: string;

  @IsString()
  @IsDefined()
  public mbti: string;

  @IsString()
  @IsDefined()
  public title: string;

  @IsArray()
  @IsDefined()
  @Type(() => Array<ResultPlace>)
  public place: Array<ResultPlace>;
}

export class InsertUserResultRequest {
  @IsString()
  @IsDefined()
  public mbti: string;
}