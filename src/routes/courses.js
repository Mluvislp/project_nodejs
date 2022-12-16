import express from 'express';
import  {CoursesController}  from '../resources/app/controllers/CoursesController.js';

    var router = express.Router() ;
    var courses = new CoursesController;
    
    router.get('/add-new-course',courses.addNew)
    router.post('/handle-add', courses.handleAdd)
    router.get('/edit-course/:id',courses.courseEdit)
    router.put('/handle-edit/:id', courses.handleEdit)
    router.delete('/delete/:id', courses.delete)

    router.get('/:slug',courses.courseDetail)

export {router}