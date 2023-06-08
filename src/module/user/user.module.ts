import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserResult, UserResultSchema } from './user.schema';
import { Question, QuestionSchema } from '../question/question.schema';
import { Place, PlaceSchema } from '../place/place.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserResult.name, schema: UserResultSchema },
      { name: Question.name, schema: QuestionSchema },
      { name: Place.name, schema: PlaceSchema },
    ]),
  ],
  controllers: [ UserController ],
  providers: [ UserService ],
  
})
export class UserModule {}
