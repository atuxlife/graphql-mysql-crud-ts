import { createConnection } from 'typeorm';
import { Users } from './schema/Entities/Users';
import { DB_USER, DB_PASW, DB_PORT, DB_HOST, DB_NAME } from './config';

export const connectDB = async () => {
    await createConnection({
       type: "mysql",
       username: DB_USER,
       password: DB_PASW,
       port: Number(DB_PORT),
       host: DB_HOST,
       database: DB_NAME,
       entities: [Users],
       synchronize: false,
       ssl: false
    });
};