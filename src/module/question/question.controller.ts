import { Controller, Get } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from './question.schema';

@Controller('question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
  ) {}

  @Get()
  public async getQuestionList(): Promise<Array<Question>> {
    const result = await this.questionService.getQuestionList();
    return result;
  }
}
