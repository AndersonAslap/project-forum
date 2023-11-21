import { randomUUID } from "crypto";

type AnswerProps = {
    id?: string
    content: string
    authorId: string
    questionId: string
}

export class Answer {
    private _id: string;
    private _content: string;
    private _authorId: string;
    private _questionId: string;

    constructor(props: AnswerProps) {
        this._id = props.id ?? randomUUID();
        this._content = props.content;
        this._authorId = props.authorId;
        this._questionId = props.questionId;
    }
}