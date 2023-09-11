import { Model, Types } from 'mongoose';
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface';
import { IAcademicDepartment } from '../academicDepartment/academicDepartment.interface';
import { IAcademicSemester } from '../academicSemester/academicSemester.interface';

export type UserName = {
  firstName: string;
  lastName: string;
  middleName: string;
};

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  address: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type IStudent = {
  id: string;
  name: UserName; //embedded object
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian; // embedded object
  localGuardian: LocalGuardian; // embedded object
  academicFaculty: Types.ObjectId | IAcademicFaculty; // reference _id
  academicDepartment: Types.ObjectId | IAcademicDepartment; // // reference _id
  academicSemester: Types.ObjectId | IAcademicSemester; // reference _id
  profileImage?: string;
};

export type StudentModel = Model<IStudent, Record<string, unknown>>;

export type IStudentFilters = {
  searchTerm: string;
};

// {
//   "faculty": {
//     "name": {
//       "firstName": "raj",
//       "lastName": "khan"
//     },
//     "gender": "male",
//     "dateOfBirth": "24-3-3333",
//     "email": "raj@khan.com",
//     "contactNo": "123456",
//     "emergencyContactNo": "3456",
//     "bloodGroup": "A+",
//     "presentAddress": "fdskaljf",
//     "permanentAddress" : "s;dkfjakjfa",
//     "guardian":{
//       "fatherName": "string",
//     "fatherOccupation": "string",
//     "fatherContactNo": "string",
//     "motherName": "string",
//     "motherOccupation": "string",
//     "motherContactNo": "string",
//     "address": "string",
//     },
//     "localGuardian":{
//       "name": "string",
//   "occupation": "string",
//   "contactNo": "string",
//   "address": "string",
//     },
//     "academicFaculty": '6491c40a2f381fda15c7caa9',
//     "academicDepartment":'',
//     "academicSemester":''
//   }
// }
