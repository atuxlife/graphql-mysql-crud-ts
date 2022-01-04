import { createConnection } from 'typeorm';
import { Users } from './schema/Entities/Users';

export const connectDB = async () => {
    await createConnection({
       type: 'mysql',
       username: 'dbadm',
       password: 'AZ92adx$!',
       port: 3306,
       host: 'localhost',
       database: 'usersdb',
       entities: [Users],
       synchronize: false,
       ssl: false
    });
};