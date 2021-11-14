// Importando router
import { Router } from 'express';

import projectController from '@server/controllers/projectController';

// Creando la instancia de un router
const router = new Router();

//"/projects" "/projects/index2
router.get(['/','/index'],projectController.index);

//"/projects/add"
router.get(['/add'],projectController.add);


export default router;
