import { Slug } from "./value-objects/slug";
import { Entity } from "../../@shared/entities/entity";
import { UniqueEntityID } from "../../@shared/entities/unique-entity-id";

type QuestionProps = {
    authorId: UniqueEntityID
    bestAnswerId?: UniqueEntityID
    title: string
    content: string
    slug: Slug
    createdAt: Date 
    updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {}