
import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpack-logo.png';
// Se necesita la palabra export para poder importar dicha función en este caso en el main.js
export const saludar = (nombre) => {
    console.log("Creando etiqueta h1");

    const h1 = document.createElement("h1");
    h1.innerText = `Hola, ${nombre}`;
    document.body.append(h1);

    //img
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append( img );

}