
// Import router
import { Router} from 'express';

// Importando el controlador
import useController from '@server/controllers/useController';

// Creando la instancia del Router
const router = new Router

/* GET users listing. */
router.get('/', useController.index); 

export default router;
