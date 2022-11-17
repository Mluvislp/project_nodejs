import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Course = new Schema({
    title : { type: String, default: '' },
    img : { type: String},
    body : { type: String},
    insert_date : {type : Date , default : Date.now}
})
export default mongoose.model('Course' , Course)