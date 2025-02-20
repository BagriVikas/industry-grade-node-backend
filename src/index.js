import connectDB from "./db/config.js";
import 'dotenv/config';
import app from './app.js';

connectDB()
.then(() => {
    
    console.log('MONGODB connection SUCCESSFUL');
    
    app.on('error', (error) => {
        console.error('APP run FAILED: ', error);
        process.exit(1);
    });

    app.listen(process.env.PORT || 8081, () => {
        console.log(`App is running at port: ${process.env.PORT || 8081}`);
    });

})
.catch((error) => {
    console.error('MONGODB connection FAILED (index.js): ', error);
    process.exit(1);
});
