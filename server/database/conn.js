import mongoose from "mongoose";
// import { MongoMemoryServer } from "mongodb-memory-server";

const connect = async ()=>{
    // const mongodb = await MongoMemoryServer.create();
    // const getUri = mongodb.getUri()    
    // const db = await mongoose.connect(getUri)

    const MONGO_URI = process.env.MONGO_URI;
      const db = mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })

    console.log("Database Connecting.....")
    return db;
}
export default connect;