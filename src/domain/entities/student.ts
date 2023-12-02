import { Entity } from "../../@shared/entities/entity";

type StudentProps = {
    name: string
}

export class Student  extends Entity<StudentProps> {}