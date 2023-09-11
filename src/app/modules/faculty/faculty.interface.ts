import { Model, Types } from 'mongoose';
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface';

export type UserName = {
  firstName: string;
  lastName: string;
  middleName: string;
};

export type IFaculty = {
  id: string;
  name: UserName; //embedded object
  designation: string;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  academicFaculty: Types.ObjectId | IAcademicFaculty; // reference _id
  profileImage?: string;
};

export type FacultyModel = Model<IFaculty, Record<string, unknown>>;

// {
//   "faculty": {
//     "name": {
//       "firstName": "raj",
//       "lastName": "khan"
//     },
//     "designation": "lecturer",
//     "gender": "male",
//     "dateOfBirth": "24-3-3333",
//     "email": "raj@khan.com",
//     "contactNo": "123456",
//     "emergencyContactNo": "3456",
//     "bloodGroup": "A+",
//     "presentAddress": "fdskaljf",
//     "permanentAddress" : "s;dkfjakjfa",
//     "academicFaculty": '6491c40a2f381fda15c7caa9',
//   }
// }
