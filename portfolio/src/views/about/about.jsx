import styles from './about.module.css';

//Importacion de iconos
import HTMLIcon from '../../assets/html.icon.png';
import CSSIcon from '../../assets/css.icon.png';
import JavaScriptIcon from '../../assets/javaScript.icon.png';
import GitIcon from '../../assets/git.icon.png';
import ReactIcon from '../../assets/react.icon.png';
import BootstrapIcon from '../../assets/bootstrap.icon.png';
import ReduxIcon from '../../assets//redux.icon.png';
import SequelizeIcon from '../../assets/sequelize.icon.png';

const About = () => {

    return(
        <section className={styles.aboutViewContainer}> {/*Todo el view*/}
            <div className={styles.aboutContainer}> {/*Solo el contenedor; deja un espacio donde se posiciona la NavBar*/}

                <div className={styles.tituloYDescrpcionPersonal}> {/*Titulo y descripción personal*/}
                     <h3>About</h3>
                    <p>
                        Con la ayuda y el apoyo de mi familia, 
                        me di el lujo de terminar mis estudios escolares y dedicarme a lo que deseara.
                        Mi inclinación al desarrollo web fue gradual, seguramente influenciado 
                        por mi amor a la simpleza de la complejidad y mi fascinación por el orden.<br />
                        Ahora quiero mostrar mi profesionalismo con mis capacidaes, conocimiento, 
                        resposanbilidad y dedicación; y mostrar mi valor personal 
                        a travéz de la convivencia y el trabajo en equipo.
                    </p>
                </div>

                <div className={styles.habilidadesYTecnologias}> {/*Habilidades y tecnologias*/}

                    <div className={styles.cursosYCertificaciones}>

                        <h4><i>Cursos y certificaciones:</i></h4>

                        <a href="https://www.freecodecamp.org/espanol/certification/Caleb_S_Bravo/responsive-web-design">
                            Resposive web design
                        </a>
                    </div>

                    <p>
                        Edad: 21 años. <br />
                        Nivel de Inglés Intermedio. <br />
                        Amante del anime y manga. <br />
                        Guitarrista, trombonista, bajista. <br />
                        Amante del rock, indie y jazz. <br />
                    </p>
                    
                    <div className={styles.tecnologiasContainer}>
                        <img src={HTMLIcon} alt="HTML icon" />
                        <img src={CSSIcon} alt="CSS icon" />
                        <img src={JavaScriptIcon} alt="JavaScript icon" />
                        <img src={GitIcon} alt="Git icon" />
                        <img src={ReactIcon} alt="React icon" />
                        <img src={BootstrapIcon} alt="Bootstrap icon" />
                        <img src={ReduxIcon} alt="Redux icon" />
                        <img src={SequelizeIcon} alt="Sequelize icon" />
                    </div>

                </div>

            </div>
        </section>
    )
}
export default About