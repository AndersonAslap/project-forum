import { randomUUID } from "crypto";

type QuestionProps = {
    id?: string
    title: string
    content: string
}

export class Question {
    private _id: string;
    private _title: string;
    private _content: string;

    constructor(props: QuestionProps) {
        this._id = props.id ?? randomUUID();
        this._title = props.title;
        this._content = props.content
    }
}