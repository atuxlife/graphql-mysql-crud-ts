import app from './app';
import { connectDB } from './db';
import { SV_PORT } from './config';

async function main(){
    try {
        await connectDB();
        app.listen(SV_PORT);
        console.log('Listening on port '+SV_PORT);
    } catch (error) {
        console.log(error);
    }
}

main();