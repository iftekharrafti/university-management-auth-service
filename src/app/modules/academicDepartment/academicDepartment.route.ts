import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicDepartmentValidation } from './academicDepartment.validation';
import { academicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/create-department',
  validateRequest(
    academicDepartmentValidation.createAcademicDepartmentZodSchema
  ),
  academicDepartmentController.createDepartment
);

router.get('/:id', academicDepartmentController.getSingleDepartment);

router.patch('/:id', academicDepartmentController.updateDepartment);

router.delete('/:id', academicDepartmentController.deleteDepartment);

router.get('/', academicDepartmentController.getAllDepartment);

export const academicDepartmentRoutes = router;
