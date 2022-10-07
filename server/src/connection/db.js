const mongoose= require("mongoose")

let connection = mongoose.connect(
  "mongodb+srv://Rohit:1234@cluster0.ee6yhdf.mongodb.net/?retryWrites=true&w=majority"
);

module.exports=connection