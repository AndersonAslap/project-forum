import { Entity } from "../../@shared/entities/entity";
import { UniqueEntityID } from "../../@shared/entities/unique-entity-id";

type AnswerProps = {
    content: string
    authorId: UniqueEntityID
    questionId: UniqueEntityID
    createdAt: Date 
    updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {}