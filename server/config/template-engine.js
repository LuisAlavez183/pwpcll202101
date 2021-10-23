import exphbs from 'express-handlebars';
import path from 'path';


//exportando una funcion de configuración
export default (app) => {
    //1.registrar el motor de  plantilla
    app.engine('hbs',
        exphbs({
            extname: '.hbs',
            default: 'main',
        })
    );
    
    //2. Seleccionar el motr de la plantilla recien registrado 
    app.set('view engine','hbs');
    //3. Estableciendo la ruta de las vistas 
    app.set('views',path.join(__dirname, '..','views')); 
    // Retornamos el  valor de entrada
    return app;


};