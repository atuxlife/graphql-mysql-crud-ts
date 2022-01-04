import { config } from 'dotenv';
config();

// Puerto de la aplicación
export const SV_PORT = process.env.SV_PORT || 3000;

// Variables de entorno base de datos
export const DB_USER = process.env.DB_USER;
export const DB_PASW = process.env.DB_PASW;
export const DB_PORT = process.env.DB_PORT;
export const DB_HOST = process.env.DB_HOST;
export const DB_NAME = process.env.DB_NAME;