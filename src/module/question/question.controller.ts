import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResponseListDto } from 'src/decorator/dto/response.list.dto';
import { ResponseList } from 'src/decorator/response-list.decorator';
import { GetQuestionListResponse } from './dto/question.dto';
import { QuestionService } from './question.service';

@ApiTags('QUESTION')
@Controller('question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
  ) {}

  @Get()
  @ResponseList(GetQuestionListResponse)
  public async getQuestionList(): Promise<ResponseListDto<GetQuestionListResponse>> {
    const result = await this.questionService.getQuestionList();
    return new ResponseListDto(result);
  }
}
