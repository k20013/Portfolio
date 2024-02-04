import styles from './navBar.module.css';

import Github from '../icons-btn/github/github';
import Linkedin from '../icons-btn/linkedin/linkedin';
import Instagram from '../icons-btn/instagram/instagram';
import Whatsapp from '../icons-btn/whatsapp/whatsapp';

const NavBar = () => {
    return(
        <nav className={styles.nav}>
            
            <Github />
            <Linkedin />
            <Instagram />
            <Whatsapp />

            <button class={styles.button}> Curriculum </button>
            
        </nav>
    )
}
export default NavBar