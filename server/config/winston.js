// Importando a winston
import winston, {format} from 'winston';
import appRoot from 'app-root-path';

// Componetes para crear el formato personalizado
const { combine, timestamp, printf, uncolorize, json, colorize} = format;

 
// Creando el  perfil de color para el log
const colors ={
    error: 'red',
    warning: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'blue',
};
// Agrerando el perfil a winston
winston.addColors(colors);
// Formato de consola 
const myForm = format.combine(
    colorize({ all: true}),
    timestamp(),
    printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
);

// Formato para la salida de los archivos de log
const myFormat = format.combine(
    uncolorize(),
    timestamp(),
    json()
);


// Crean objetos de configuracion 
const option ={
    infoFile:{
        level:'info',
        filename: `${appRoot}/server/logs/infos.log`,
        handlerexceptions: true,
        maxsize: 5242800,// 5MB
        maxFiles: 5,
        format: myFormat,
    },
    warnFile:{
        level:'warning',
        filename: `${appRoot}/server/logs/warning.log`,
        handlerexceptions: true,
        maxsize: 5242800,// 5MB
        maxFiles: 5,
        format: myFormat,
    },
    errorFile:{
        level:'error',
        filename: `${appRoot}/server/logs/erros.log`,
        handlerexceptions: true,
        maxsize: 5242800,// 5MB
        maxFiles: 5,
        format: myFormat,
    },
    console:{
        level: 'debug',
        handlerexceptions: true,
        format: myFormat,
    },
};


// creando la instancia de longer
const logger = winston.createLogger({
    transports:[
        new winston.transports.File(option.infoFile),
        new winston.transports.File(option.warnFile),
        new winston.transports.File(option.errorFile),
        new winston.transports.Console(option.console)
    ],
    exitOnError:false,
});

// 
logger.stream = {
    write(message){
        logger.info(message);
    },
};

export default logger;
