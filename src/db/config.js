import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';
// import 'dotenv/config'

const connectDB = async () => {

    try {
        const connectionInstance = mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}?authSource=admin`);
        console.log(`Mongo connected !!! Mongo Host: ${(await connectionInstance).connection.host}`);
    } catch (error) {
        console.error('error connecting with database: ', error);
        process.exit(1);
    }

}

export default connectDB;