(()=>{"use strict";console.log("webpack"),((o="hola")=>{alert(o)})(),async function(){console.log("Llama a una funcion asincrona");const o=new Promise((o=>{setTimeout((()=>{o("resolved")}),2e3)}));console.log(o)}()})();