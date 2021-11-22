// Importando biblioteca de validacion
import * as Yup from 'yup';

//Creando el esquema de validacion 

const projectSchema = Yup.object().shape({
    name: Yup.string().required('Se requiere nombre'),
    description: Yup.string().max(500,'La descripcion esta limitada a 500 catacteres')
    .required('Se requiere una descripción'),
});

// Creando el middleware que realizara la valdacion
const getProject = (req) => {
    // Extraemos los datos del formulario del cuerpo de la  peticion de
    const {name,description} = req.body;
    // Regresamos un objeto Project formado por los datos del formulario 
    return{
        name,
        description,
    };
};

 export default {
      getProject,
      projectSchema,
 };