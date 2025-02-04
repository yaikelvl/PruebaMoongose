import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";



export type StudentSchema = HydratedDocument<Student>;

@Schema()
export class Student{

    @Prop()
    name: string;

    @Prop()
    country: string;

    @Prop()
    age: number;
}

export const StudentSchema = SchemaFactory.createForClass(Student); 