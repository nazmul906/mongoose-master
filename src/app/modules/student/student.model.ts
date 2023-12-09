// writing the schema for student interface(student.interface.ts)
import { Schema } from 'mongoose';
import {
  Gaurdian,
  Student,
  UserName,
  LocalGaurdian,
} from './student.interface';

// refactoring schema like interface to break it down

const userNameSchema = new Schema<UserName>({
  firstname: {
    type: String,
    required: true,
  },
  middlename: {
    type: String,
  },
  lastname: {
    type: String,
  },
});

//
const gaurdianSchema = new Schema<Gaurdian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});

const localGaurdianSchema = new Schema<LocalGaurdian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
  } /* mongose er khetre String er S capital..interface e smaller */,
  name: userNameSchema,
  gender: [
    'male',
    'female',
  ] /* predefined property jana thakle enum use krbo */,
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: true,
  } /* jeta obossoi lagbe oyta required */,
  contactNumber: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodgroup: ['A+', 'B+', 'A-', 'B-', 'AB', 'O'],
  presentAddress: { type: String, required: true },
  permanenttAddress: { type: String, required: true },
  gaurdian: gaurdianSchema,
  localGaurdian: localGaurdianSchema,
  profileImg: { type: String },
  isActive: ['active', 'blocked'],
});
// 3. Create a Model.
// const User = model<IUser>('User', userSchema);
