import styles from './projects.module.css';

import Project from '../../components/project/project';

const Projects = () => {

    return(
        <section className={styles.projectsViewContainer}> {/*El contenedor con tamaño completo del viewport*/}

            <div className={styles.projectsWithoutNavContainer}> {/*El contenedor que deja un espacio para la barra de tareas*/} 
                <Project />
            </div>
            
        </section>
    )
}
export default Projects