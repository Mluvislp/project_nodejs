import mongoose from "mongoose"
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/courses' , {
            useNewUrlParser : true ,
            useUnifiedTopology : true
        });
        console.log('success');
    } catch(error){
        console.log('failed');
    }
}
export {connect}