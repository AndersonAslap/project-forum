import { randomUUID } from "crypto";

type StudentProps = {
    id?: string 
    name: string
}

export class Student {
    private _id: string;
    private _name: string;

    constructor(props: StudentProps){
        this._id = props.id ?? randomUUID();
        this._name = props.name;
    }
}