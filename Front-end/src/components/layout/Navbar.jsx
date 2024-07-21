import {Link} from 'react-router-dom'
import Container from './Container.jsx'
import Logo from '../../img/costs_logo.png'
import Styles from './Navbar.module.css'


function Navbar(){
    return(
        <nav className={Styles.navbar}>
            <Container>
                <Link to="/"><img src={Logo} /></Link>
                <ul className={Styles.list}>
                    <li className={Styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={Styles.item}>
                        <Link to="/projects">Projeto</Link>
                    </li>
                    <li className={Styles.item}>
                        <Link to="/contact">Contato</Link> 
                    </li>
                    <li className={Styles.item}>
                        <Link to="/company">Empresa</Link>
                    </li>
                </ul>

            </Container>
        </nav>
    )
}

export default Navbar;