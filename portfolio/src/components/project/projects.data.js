/*
    La estructura de cada projecto es la siguiente: 
    
    Todas las propiedades son de tipo 'string'. 
    [
        {
            image, *opcional
            name,
            description,
            urlGithub,
            url *opcional

        },
        ...
    ]
*/
import imagenDePrueba from '../../assets/imagen_de_prueba.jpg';

const data = {
        image: imagenDePrueba,
        name: "Portfolio",
        description: "Portafolio personal",
        urlGithub: "Github Url",
        url: "Url"
    }    


module.exports = data;