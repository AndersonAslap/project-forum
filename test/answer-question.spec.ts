import { randomUUID } from "crypto";
import { AnswerQuestionUseCase } from "../src/domain/use-cases/answer-question";
import { AnswersRepository } from "../src/domain/repositories/answers-repository";
import { Answer } from "../src/domain/entities/answer";

const answerRepositoryMock: AnswersRepository = {
    create: async (answer:Answer) => {
        return;
    }
}

test("should create an answer", async () => {
    const usecase = new AnswerQuestionUseCase(answerRepositoryMock);
    const input = {
        instructorId: randomUUID(),
        questionId: randomUUID(),
        content: 'nova resposta'
    }
    const output = await usecase.execute(input);
    expect(output.answer).toBe('nova resposta');
});