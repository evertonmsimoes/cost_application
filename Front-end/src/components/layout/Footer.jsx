import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={Styles.footer}>
            <ul className={Styles.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
                <li> 
                    <FaTwitter />
                </li>
            </ul>
            <p className={Styles.copy_right}>
                <span>Costs</span> &copy; 2024
            </p>
        </footer>
    )
}

export default Footer;