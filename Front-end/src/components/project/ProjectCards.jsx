import { Link } from 'react-router-dom';
import { BsPencil, BsExclude } from 'react-icons/bs';
import Style  from './ProjectCards.module.css'


export function convertCentsForReal(numInt){
    return (parseFloat(numInt) / 100).toFixed(2).replace('.', ',')
}



function ProjectCard (  { id, name, budget_in_cents, category, handleDesable } ){

    

    const desable = (e) => {
        e.preventDefault()
        handleDesable(id)
    }

    return (
        <div className={Style.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R$ {convertCentsForReal(budget_in_cents)}
            </p>
            <p className={Style.category_text}>
                <span className={`${Style[category.name.toLowerCase()]}`}> </span> {category.name}
            </p>
            <div className={Style.project_card_actions}>
               <Link to={`/project/${id}`}>
                    <BsPencil /> Editar
               </Link>
               <Link onClick={desable}>
                    <BsExclude /> Desabilitar
               </Link>
            </div>
        </div>
    )
}

export default ProjectCard;
