import Styles from './LinkButton.module.css'
import { Link } from 'react-router-dom';

function LinkButton({to, text}){
    return(
        <Link className={Styles.bnt} to={to}>
            {text}
        </Link>
    )
}

export default LinkButton;