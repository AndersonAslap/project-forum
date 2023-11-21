import { randomUUID } from "crypto";

type QuestionProps = {
    id?: string
    title: string
    content: string
    authorId: string
}

export class Question {
    private _id: string;
    private _title: string;
    private _content: string;
    private _authorId: string

    constructor(props: QuestionProps) {
        this._id = props.id ?? randomUUID();
        this._title = props.title;
        this._content = props.content;
        this._authorId = props.authorId;
    }
}