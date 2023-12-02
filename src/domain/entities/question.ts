import { Slug } from "./value-objects/slug";
import { Entity } from "../../@shared/entities/entity";

type QuestionProps = {
    title: string
    content: string
    authorId: string
    slug: Slug
}

export class Question extends Entity<QuestionProps> {}