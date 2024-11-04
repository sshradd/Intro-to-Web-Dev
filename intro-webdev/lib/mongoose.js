import mongoose from "mongoose";

const connectionToDatabase = async () => {

    try{
        await mongoose.connect(proccess.env.MongoURL)
        console.log("connected to Database")
    }catch(err){
        console.log(err)
    }



}

export default connectionToDatabase