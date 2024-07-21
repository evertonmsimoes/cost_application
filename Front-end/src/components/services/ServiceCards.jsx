import { BsFillTrashFill } from 'react-icons/bs'
import Styles from '../project/ProjectCards.module.css'

export default function ServiceCards({ service, removeService }){
    
    function remove (){
        fetch("http://localhost:8090/services", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(service)
        })
        .then(() => {
            removeService(service.id)
            })
        .catch((err) => console.log(err))
    }


    return(
        <div className={Styles.project_card}>
            <h4>{service.name}</h4>
            <p>
                <span>Custo total:</span> R$ {service.cost_in_cents}
            </p>
            <p>{service.description}</p>
            <div className={Styles.project_card_actions} onClick={remove}>
                <button>
                    Excluir
                    <BsFillTrashFill />
                </button>
            </div>            
        </div>
    )
}
