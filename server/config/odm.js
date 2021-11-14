// Importando biblioteca ODM
import mongoose from 'mongoose';
//Importando script para el log
import winston from './winston';
 
class MongooseODM{
    //Constructor
    constructor(url){
        this.url = url;
    }
    // Metodo de conexion
    async connect(){
        mongoose.Promise = global.Promise;
        winston.info(`Connecting to : ${this.url}`);
        try{
            await mongoose.connect(this.url);
            return true;
        }catch(error){
            winston.error(`Error al conectarse a la base de datos: ${error.message}`);
            return false;
        }
    }
}

export default MongooseODM;