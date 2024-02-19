import styles from './footer.module.css';

const retFunc = (x) => x;

const copyEmail = () => {
    // Crea un área de texto temporal para copiar el contenido
    const areaDeTextoTemporal = document.createElement('textarea');
    areaDeTextoTemporal.value = 'Calebphone72@gmail.com';

    // Añade el área de texto temporal al DOM
    document.body.appendChild(areaDeTextoTemporal);

    // Selecciona el contenido del área de texto temporal
    areaDeTextoTemporal.select();
    areaDeTextoTemporal.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el contenido al portapapeles
    document.execCommand('copy');

    // Elimina el área de texto temporal
    document.body.removeChild(areaDeTextoTemporal);

    alert('El email fue copiado en el portapapeles');
};
const enviarEmail = () => window.location.href = 'mailto: calebphone72@gmail.com';

const Footer = () => {

    return(
        <footer className={styles.footer}>

            <div className={styles.linkContainer}>

            <h5>info</h5>
                <a className={styles.link} href={retFunc("https://github.com/k20013/Portfolio")}>
                    Repositorio github
                </a>

            </div>
            
            <div className={styles.linkContainer}>

            <h5>Contacto</h5>
                
                <div className={styles.emailContainer}>
                    <span>Calebphone72@gmail.com</span>

                    <button className={styles.emailButton} onClick={copyEmail}>Copiar email</button>  

                    <button className={styles.emailButton} onClick={enviarEmail}>
                        Enviar un correo
                    </button>               

                </div>

                
            </div>

        </footer>
    )
}
export default Footer

/*
<div className={styles.linkConatiner}>
                <h5>Redes sociales</h5>
            </div>

            <div className={styles.linkConatiner}>
                <h5>Info</h5>

                    <a className={styles.link} href={retFunc("https://github.com/k20013/Portfolio")}>
                Repositorio github
            </a>

                    <a href={retFunc("mailto: calebphone72@gmail.com")}></a>
                    
                    </div>
*/