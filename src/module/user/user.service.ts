import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserResult } from './user.schema';
import { InsertUserResultRequest, InsertUserResultResponse } from './dto/user.dto';
import { Question } from '../question/question.schema';
import { Place } from '../place/place.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserResult.name)
    private readonly userResultModel: Model<UserResult>,

    @InjectModel(Question.name)
    private readonly questionModel: Model<Question>,

    @InjectModel(Place.name)
    private readonly placeModel: Model<Place>,
  ) {}

  public async insertUserResult(param: InsertUserResultRequest): Promise<InsertUserResultResponse> {
    const userResultDoc = new this.userResultModel(param);

    await userResultDoc.save();

    const questionData = await this.placeModel.findOne({ mbti: param.mbti }).exec();

    console.log(questionData);

    return questionData as unknown as InsertUserResultResponse ;
  }
  
}
