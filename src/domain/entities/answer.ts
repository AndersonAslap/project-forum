import { randomUUID } from "crypto";

type AnswerProps = {
    id?: string
    content: string
}

export class Answer {
    private _id: string;
    private _content: string;

    constructor(props: AnswerProps) {
        this._id = props.id ?? randomUUID();
        this._content = props.content;
    }
}