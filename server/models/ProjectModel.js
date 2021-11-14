//1. Importando Mongoose
import * as mongoose from 'mongoose';
//2. Destructuracion para obtener Squema
import {Schema} from 'mongoose';

//3. Creando el schema 
const ProjectSchema = new Schema({
    name:{
        type: string,
        required: true,
    },
    description:{
        type: string,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('project', ProjectSchema);