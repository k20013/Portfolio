import styles from './project.module.css';

import imagenDePrueba from '../../assets/imagen_de_prueba.jpg'

const data = {
    image: imagenDePrueba,
    name: "Portfolio",
    description: "Portafolio personal",
    urlGithub: "Github Url",
    url: "Url"
}

const Project = () => {

    return(
        <section className={styles.cardsContainer}>

            <div class={styles.card}>
                <div class={styles.card2}>
                    
                {data.image && <img src={data.image} alt="" className={styles.cardImg} />}

                <div className={styles.cardInformation}>

                    <h5 className={styles.cardName}>{data.name}</h5>

                    <p className={styles.cardDescription}>{data.description}</p>

                    <a href={data.urlGithub}>Github repository</a>

                    {data.url && <a href={data.url}>Link to this project</a>}
                
                </div>

                </div>
            </div>

        </section>
    )
}
export default Project

/*{data.image && <img src={data.image} alt="" />}
            <h5>{data.name}</h5>

            <p>{data.description}</p>

            <a href={data.urlGithub}>Github repository</a>

            {data.url && <a href={data.url}>Link to this project</a>}*/

/*<div class={styles.card}>
                <div class={styles.card2}>

                </div>
            </div>*/