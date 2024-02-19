import styles from './navBar.module.css';

import Github from '../icons-btn/github/github';
import Linkedin from '../icons-btn/linkedin/linkedin';
import Whatsapp from '../icons-btn/whatsapp/whatsapp';

import CV_PDF from '../../../public/Caleb_Bravo_CV v2.pdf';

const abrirPDF = () => {
    window.open(CV_PDF, '_blank');
}

const NavBar = () => {
    return(
        <nav>

            

            <div className={styles.contacCV}>

                <Github />
                <Linkedin />
                <Whatsapp />

                <button class={styles.button} onClick={abrirPDF}> Curriculum </button>
            </div>            
            
        </nav>
    )
}
export default NavBar