import { Answer } from "../entities/answer"

export class AnswerQuestionUseCase {
    execute({instructorId, questionId, content}: Input) : Output {
        const answer = new Answer({content});   
        return {
            answer: content
        }; 
    }
}

type Input = {
    instructorId: string
    questionId: string
    content: string
}

type Output = {
    answer: string
}