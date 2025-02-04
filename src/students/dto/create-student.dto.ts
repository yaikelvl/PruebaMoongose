import { IsIn, IsInt, IsPositive, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateStudentDto {

    @IsString()
    @MinLength(1)
    @MaxLength(25)
    name: string;

    @IsString()
    country: string;

    @IsPositive()
    @IsInt()
    @Min(18)
    age: number;
}
