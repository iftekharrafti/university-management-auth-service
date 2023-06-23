import { Model, Types } from 'mongoose';
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface';

export type IAcademicDepartment = {
  title: string;
  academicFaculty: Types.ObjectId | IAcademicFaculty;
};

export type AcademicDepartmentModel = Model<IAcademicDepartment>;

export type IAcademicDepartmentFilterRequest = {
  searchTerm?: string;
  academicFaculty?: Types.ObjectId;
};
