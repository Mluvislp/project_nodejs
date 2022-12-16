import mongoose from "mongoose" ;
import slug from "mongoose-slug-generator";
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema({
    title : { type: String, default: '' , require : true },
    img : { type: String},
    body : { type: String},
    insert_date : {type : Date , default : Date.now},
    slug : { type: String , slug : 'title'},
    code_video : { type: String},
} ,  { timestamps : true})
export default mongoose.model('Course' , Course)