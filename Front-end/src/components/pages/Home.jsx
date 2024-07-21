import Styles from './Home.module.css'
import svgins from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton';

function Home(){
    return (
        <section className={Styles.home_container}>
            <h1>Bem Vindo ao <span>Costs</span>!</h1>
            <p>Comece a gerenciar os seus Projetos agora mesmo!</p>
            <LinkButton to='/newproject' text='Crair projeto!' />
            <img src={svgins} alt='Cost' />
        </section>
    )
}

export default Home;