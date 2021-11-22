// Importando router
import { Router } from 'express';

import projectController from '@server/controllers/projectController';

// Importando el  Validador
import Validate from '@server/validators/validateFactory';

// Importando el esquema de validacion de projectos
import projectValidator from '@server/validators/projectValidator';

// Creando la instancia de un router
const router = new Router();

// GET "/projects" "/projects/index2
router.get(['/','/index'],projectController.index);

//GET "/projects/add"
// Siver el formulario para agregar proyectos
router.get(['/add'],projectController.add);

//POST "/projects/add"
// Procesa el formulario
router.post('/add',Validate({
    shape: projectValidator.projectSchema,
    getObject:projectValidator.getProject, 
}),
 projectController.addPost);


export default router;
