import { Request, Response } from 'express';
import { StudentService } from './student.service';

// req and response handle kre ei controller..service e business logic likhar por ekhne asbo
const createStudent = async (req: Request, res: Response) => {
  try {
    // this will recieve data from client, then send the req body to service module which create student db
    //   and will call service function to send this data

    //  amra postman theke patanor somoi student name e object banai patai,tai destructur kore name alias krsi
    const { student: studentData } = req.body;

    //   now call the service function which has conctn with database
    const result = await StudentService.createStudentIntoDB(studentData);

    // send response
    res.status(200).json({
      success: true,
      message: 'student is created succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentsFromDb();
    res.status(200).json({
      success: true,
      message: 'student retireved succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentService.getAllSinlgeStudentFromDb(studentId);
    res.status(200).json({
      success: true,
      message: 'single student is retireved succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// export it so that routes can use it
export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
