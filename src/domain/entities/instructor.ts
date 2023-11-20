import { randomUUID } from "crypto"

type InstructorProps = {
    id?: string
    name: string
}

export class Instructor {

    private _id: string
    private _name: string

    constructor(props: InstructorProps){
        this._id = props.id ?? randomUUID();
        this._name = props.name;
    }
}