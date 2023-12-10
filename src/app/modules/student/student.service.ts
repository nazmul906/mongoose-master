// it is responsible for handling business logic
// means its the endpoint with database which write query to get data

import { Student } from './student.interface';
import { StudentModel } from './student.model';

// business logic

const createStudentIntoDB = async (student: Student) => {
  // studentmodel er upr query chalaile db te data create hbe mongoose dhara
  const result = await StudentModel.create(student);
  return result;
  //   ei data return chole jabe controller e ejnno eta k object akare export krte hbe jno controller cathc krte pare
};

const getAllStudentsFromDb = async () => {
  const result = await StudentModel.find();
  return result;
};
const getAllSinlgeStudentFromDb = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

// export so that controller can use it
export const StudentService = {
  createStudentIntoDB,
  getAllStudentsFromDb,
  getAllSinlgeStudentFromDb,
};
