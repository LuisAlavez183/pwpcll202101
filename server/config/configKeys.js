// Importando el paqueete DotEnv
import dotenv from 'dotenv';

/// Cargar las variables de entorno 
dotenv.config();

// Exportando los valores de configuración
export default{
    homeUrl : `${process.env.APP_URL}:${process.env.PORT}`,
    port : process.env.PORT,
    ip: process.env.IP,
    databaseUrl: process.env.DATABASE_URL,
};
