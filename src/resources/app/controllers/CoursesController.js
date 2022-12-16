import Course from "../models/Course.js"
import { handleMongooseToObject, handleMultipleMongooseToObject } from "../../../utils/mongoose.js"
class CoursesController{
    courseDetail = (req, res , next) => {
        Course.findOne({slug : req.params.slug}).then(  Course => {  res.render('course/detail' , {Course : handleMongooseToObject(Course)} )}
            ).catch(next);
    };
    addNew = (req , res , next) => {
        res.render('course/add-new');
    };
    handleAdd = (req , res , next) => {
        const formData = req.body;
        formData.code_video = formData.code_video.split("v=")[1].substring(0, 11);
        const course = new Course(formData);
        course.save().then(()=> res.redirect('/')).catch(error => {

        });
    };
    courseEdit = (req, res , next) => {
        Course.findById({_id : req.params.id}).then(  
            Course => {  res.render('course/edit' , {Course : handleMongooseToObject(Course)} )}
            ).catch(next);
    };
    handleEdit = (req , res , next) => {
        const formData = req.body;
        formData.code_video = formData.code_video.split("v=")[1].substring(0, 11);
        Course.updateOne({_id : req.params.id} , formData).then(
            () => {res.redirect('/')}
        ).catch(error => { console.log(error);})
    };
    delete = (req , res , next) => {
        Course.deleteOne({_id : req.params.id}).then(
            () => {res.redirect('/')}
        ).catch(error => { console.log(error);})
    };
}
export {CoursesController}
