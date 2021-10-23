import { Router } from 'express';
//Importando el router de Home
import homeRouter from './home'; 
// Importando el router de users
import usersRouter from './users'; 

/* GET home page. */
// router.use('/', homeRouter);
//  router.use('/user',usersRouter);

const addRoutes = (app) => {
  app.use('/', homeRouter);
  app.use('/user',usersRouter);
};


export default{
  addRoutes,
};


