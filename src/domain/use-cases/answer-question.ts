import { Answer } from "../entities/answer"
import { AnswersRepository } from "../repositories/answers-repository";

export class AnswerQuestionUseCase {

    constructor(private answersRepository: AnswersRepository) {}

    async execute({instructorId, questionId, content}: Input) : Promise<Output> {
        const answer = new Answer({content, questionId, authorId: instructorId});   
        await this.answersRepository.create(answer);
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