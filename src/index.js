import connectDB from "./db/config.js";
import 'dotenv/config';

connectDB();

// console.log('precess.env: ', process.env);
// console.log('database uri: ', process.env.DATABASE_URI);

/*
const app = express();

// IIFE: Immediately Invoked Function Expression
;( async () => {
    try {
        
        await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}?authSource=admin`);
        console.log('successfully connected to MongoDB');

        app.on("error", (error) => {
            console.error("Error with app while connecting with Mongo: ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`app is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("Error connecting with MongoDB: ", error);
        throw error;
    }
})();
*/
