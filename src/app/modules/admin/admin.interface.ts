import { Model } from 'mongoose';

export type UserName = {
  firstName: string;
  lastName: string;
  middleName: string;
};

export type IAdmin = {
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
  department: string; // reference _id
  profileImage?: string;
};

export type AdminModel = Model<IAdmin, Record<string, unknown>>;

export type IAdminFilters = {
  searchTerm?: string;
  id?: string;
  email?: string;
  contactNo?: string;
  emergencyContactNo?: string;
  gender?: 'male' | 'female';
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  managementDepartment?: string;
  designation?: string;
};

// {
//   "admin": {
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
//     "department": "busness"
//   }
// }
