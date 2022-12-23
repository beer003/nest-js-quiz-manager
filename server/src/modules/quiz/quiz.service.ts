import { Injectable, Get } from "@nestjs/common";

@Injectable()
export class QuizService{
   
    getAllQuiz(){
        return [1,2,3, 'This is coming from service.'];   
    }
    
}