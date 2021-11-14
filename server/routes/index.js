import { Router } from 'express';
// Importando el router de home
import homeRouter from './home';
// Importando router de users
import userRouter from './user';
// Importando ruta de proyectos 
import projectRouter from './project';



// Agregando las rutas a la aplicación 
const addRoutes = (app) => {
  // Home Routes
  app.use('/', homeRouter);
  //Project Routes
  app.use('/projects', projectRouter);

  app.use('/user', userRouter);
};


export default {
 addRoutes,
}
