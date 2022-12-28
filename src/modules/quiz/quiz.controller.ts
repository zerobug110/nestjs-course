import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe, } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from '../../../dist/modules/quiz/dto/createQuiz.dto';

@Controller('quiz')
export class QuizController {
    
    constructor(private quizService: QuizService) {  
    }

    @Get('/')

    getAllQuiz() {
        return this.quizService.getQuizData()
        
    }

    @Post('/create')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    createQuiz(@Body() quizData: CreateQuizDto) {
        return {data: quizData}

    }


}
