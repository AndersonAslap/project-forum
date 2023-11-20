import { randomUUID } from "crypto";
import { AnswerQuestionUseCase } from "../src/domain/use-cases/answer-question";

test("should create an answer", () => {
    const usecase = new AnswerQuestionUseCase();
    const input = {
        instructorId: randomUUID(),
        questionId: randomUUID(),
        content: 'nova resposta'
    }
    const output = usecase.execute(input);
    expect(output.answer).toBe('nova resposta');
});