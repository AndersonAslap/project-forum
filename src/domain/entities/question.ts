import { randomUUID } from "crypto";
import { Slug } from "./slug";

type QuestionProps = {
    id?: string
    title: string
    content: string
    authorId: string
    slug: Slug
}

export class Question {
    private _id: string;
    private _title: string;
    private _content: string;
    private _authorId: string
    private _slug: Slug;

    constructor(props: QuestionProps) {
        this._id = props.id ?? randomUUID();
        this._title = props.title;
        this._content = props.content;
        this._authorId = props.authorId;
        this._slug = props.slug;
    }
}