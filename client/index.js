import './stylesheets/style.css'
import './stylesheets/mystyles.css'
console.log("webpack");
let show =( m= "hola") => {
    alert(m)
};

show();

function resolveAfter2Seconds(){
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve('resolved')
        },2000);    
    });
}

async function asyncCall(){
    console.log("Llama a una funcion asincrona");
    const result = resolveAfter2Seconds();
    console.log(result);
}

asyncCall();