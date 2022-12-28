import { Injectable } from '@nestjs/common';

@Injectable()

export class QuizService {
   
    getQuizData() {
        return [1,2,3]
    }

}
