import app from './app';
import { connectDB } from './db';

async function main(){
    try {
        await connectDB();
        app.listen(3000);
        console.log('Listening on port 3000');
    } catch (error) {
        console.log(error);
    }
}

main();