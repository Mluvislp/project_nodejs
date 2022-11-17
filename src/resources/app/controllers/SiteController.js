import Course from "../models/Course.js"
import { handleMultipleMongooseToObject } from "../../../utils/mongoose.js"
class SiteController{
    homePage = (req, res ,next) => {
        Course.find({}).then(
              Courses => {  res.render('home' , {Courses : handleMultipleMongooseToObject(Courses)} )}
            ).catch(next)
    }
}
export {SiteController}