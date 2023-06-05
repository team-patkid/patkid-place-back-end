import { Controller, Get } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from './question.schema';
import { ResponseList } from 'src/decorator/response-list.decorator';
import { ResponseListDto } from 'src/decorator/dto/response.list.dto';

@Controller('question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
  ) {}

  @Get()
  @ResponseList(Question)
  public async getQuestionList(): Promise<ResponseListDto<Question>> {
    const result = await this.questionService.getQuestionList();
    return new ResponseListDto(result);
  }
}
