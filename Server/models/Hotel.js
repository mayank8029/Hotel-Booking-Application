import mongoose from "mongoose";


const HotelSchema = new mongoose.Schema({

    name:{
        type: String , 
        required: true 
    } , 

    type:{
        type: String , 
        required: true 

    } ,

    city:{
        type: String , 
        required: true 

    } , 

    address:{
        type: String , 
        required: true 

    }, 
    distance:{
        type: String , 
        required: true 

    } , 
    photos:{
       type: [String] 
    } ,

    title:{
        type: String , 
        required: true 
    } , 

    desc:{
      type: String ,
      required: true 
    } , 

    rating:{
        type: Number , 
        min: 0 , 
        max:5
    } , 


    rooms : {
      type:[String] , // it will going to include room ids 

    } , 
// Here we have 100s of room and the admin here can update the price of the chepeast room 

    chepestPrice:{
        type:Number , 
        required: true 
    } , 
    featured:{
  
        type:Boolean , 
        default: false 
    }

    //in our frontend we want to show some of the featured hotes thats why we will going to use featured 

   

}) ; 
// Here we write the code to create model .first feild will going to contain the model name and the second will going to contain the model schema 

export default mongoose.model("Hotel" , HotelSchema)