import { Entity } from "../../@shared/entities/entity"

type InstructorProps = {
    name: string
}

export class Instructor extends Entity<InstructorProps> {}