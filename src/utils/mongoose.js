function handleMultipleMongooseToObject(mongoose){
  return mongoose.map(mongoose => mongoose.toObject());
};
 function handleMongooseToObject(mongoose){
  return mongoose.toObject();
};

export  { handleMongooseToObject , handleMultipleMongooseToObject}
