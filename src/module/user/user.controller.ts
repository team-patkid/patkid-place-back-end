import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResponseDataDto } from 'src/decorator/dto/response.data.dto';
import { ResponseData } from 'src/decorator/response-data.decorator';
import { InsertUserResultRequest, InsertUserResultResponse } from './dto/user.dto';
import { UserService } from './user.service';
@ApiTags('USER')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}
  
  @ApiOperation({
    summary: 'User Result',
    description: '핫플 결과 페이지',
  })
  @Get('result/:mbti')
  @ResponseData(InsertUserResultResponse)
  public async insertUserResult(@Param() param: InsertUserResultRequest): Promise<ResponseDataDto<InsertUserResultResponse>> {
    
    const result = await this.userService.insertUserResult(param);

    return new ResponseDataDto(result);
  }

}
