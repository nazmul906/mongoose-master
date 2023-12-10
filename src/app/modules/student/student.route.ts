// all route will be define here to make code reuseble,standard
import express from 'express';
import { StudentController } from './student.controller';
const router = express.Router();

// this route will call controller function
router.post('/create-student', StudentController.createStudent);
router.get('/', StudentController.getAllStudents);
router.get('/:studentId', StudentController.getSingleStudent);

export const StudentRoutes = router;

//pttrn jkn postman theke req hit hbe and app.ts e hit kbe then..route->controller->service->service will query db
