import { Schema, model, connect } from 'mongoose';

export type Gaurdian={
    fatherName: string,
    fatherOccupation: string,
    fatherContactNo: string
    motherName: string,
    motherOccupation: string,
    motherContactNo: string
  }

export type UserName={ firstname: string; middlename: string; lastname: string };
export type LocalGaurdian={
  name:string;
  occupation:string;
  contactNo: string;
  address:string
}
export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female' /* used type literal*/;
  dateOfBirth: string;
  email: string;
  contactNumber: string;
  emergencyContactNo: string;
  bloodgroup?:'A+'|'B+'| 'A-' | 'B-' | 'AB' | 'O'; /*ekhne bld group(?) optional karon sbr ta jana nao thakte pare. jehetu blld grp predefined ejnno union use krbo */;
  presentAddress: string;
  permanenttAddress: string;
  gaurdian: Gaurdian;
  localGaurdian: LocalGaurdian;
  profileImg?: string/* pic deya ta optional */
  isActive: 'active'|'inactive'

};
