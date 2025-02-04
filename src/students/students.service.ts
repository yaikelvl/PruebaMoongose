import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './schema/studen.shema';
import { Model } from 'mongoose';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private readonly studentModel: Model<Student>,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    return await this.studentModel.create(createStudentDto);
  }

  async findAll() {
    return await this.studentModel.find().exec();
  }

  async findOne(id: string) {
    //return this.studentModel.findById(id).exec();

    const student = this.studentModel.findById(id).exec();

    if (!student) {
      throw new BadRequestException('Student not found');
    }
    return student;
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    const student = await this.findOne(id);

    return await this.studentModel
      .findByIdAndUpdate(id, updateStudentDto, { new: true })
      .exec();

    return;
  }

  async remove(id: string) {
    return await this.studentModel.findByIdAndDelete(id).exec();
  }
}
