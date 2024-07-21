import Styles from "./Project.module.css"
import { useParams } from "react-router"
import { useState, useEffect } from "react"
import Loading from "../layout/Loading"
import Container from "../layout/Container"
import Message from '../layout/Message'
import { convertCentsForReal } from "../project/ProjectCards"
import ProjectForm from "../project/ProjectForm"
import ServiceForm from "../services/ServiceForm"
import ServiceCards from "../services/ServiceCards"

function Project(){
   
    const { id } = useParams()
    const [project, setProject] = useState([])
    const [service, setService] = useState([])
    const [showProjectFrom, setShowProjectForm] = useState(false)
    const [showServiceFrom, setShowServiceForm] = useState(false)
    const [menssage, setMenssage] = useState()
    const [type, setType] = useState()

    useEffect( () => {
         fetch(`http://localhost:8090/project/${id}`, {
            method: 'GET',
            headers: {
                 "content-type": "application/json"
            }
    })
    .then(resp => resp.json())
    .then((data) => { setProject(data) })
    .catch((err) => console.log(err))
}, [id])

    useEffect( () => {
        fetch(`http://localhost:8090/services/${id}`, {
        method: 'GET',
        headers: {
                "content-type": "application/json"
        }
    })
    .then(resp => resp.json())
    .then((data) => { setService(data) })
    .catch((err) => console.log(err))
    }, [id])

    const removeService = (serviceId) => {
        setService(service.filter(service => service.id !== serviceId));
    };

    const adicionarService = (newService) => {
        setService([...service, newService]);
    };
    

    function editProject(project) {
        setMenssage('')
        
        if(project.budget_in_cents < project.cost){
            setMenssage("O orçamento não pode ser menor que o custo do Projeto.")
            setType("error")
            return false
        }
        
        fetch("http://localhost:8090/project", {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(project)
        })
        .then(response => response.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(!showProjectFrom)
            setMenssage("Projeto Atualizado!")
            setType("success")
         })
        .catch((err) => console.log(err))
    }

    function toggleProjectForm(){

        setShowProjectForm(!showProjectFrom)
    }

    function toggleServiceForm(){

        setShowServiceForm(!showServiceFrom)
    }


    return(
        <>{
            project.name ? 
            <div className={Styles.project_details}>
                <Container customClass="column">
                    {menssage && <Message type={type} msn={menssage} />}
                    <div className={Styles.details_container}>
                        <h1>Projeto: {project.name}</h1>
                        <button className={Styles.btn} onClick={toggleProjectForm} >
                            {!showProjectFrom ? 'Editar Projeto' : 'Fechar'}
                        </button>
                    
                    {!showProjectFrom ? (
                        <div className={Styles.project_info}>
                            <p>
                                <span>Categoria:</span> {project.categories.name}
                            </p>
                            <p>
                                <span>Total Orçamento:</span> R$ {convertCentsForReal(project.budget_in_cents)}
                            </p>
                            <p>
                                <span>Total Utilizado:</span> R$ {convertCentsForReal(project.cost)}
                            </p>
                        </div>
                    ) : (
                        <div className={Styles.project_info}>
                            <ProjectForm handleSubmit = {editProject} bnt_text="Concluir Edição" projectData={project} />          
                        </div>
                    )}
                    </div>
                    <div className={Styles.details_from_container}>
                        <h2>Adicione um Serviço</h2>
                        <button className={Styles.btn} onClick={toggleServiceForm} >
                            {!showServiceFrom ? 'Adicionar Serviço' : 'Fechar'}
                        </button>
                        <div className={Styles.project_info}>
                            {showServiceFrom && (
                                <ServiceForm  textBtn="Adicionar Serviço" project={project} closeFrom={toggleServiceForm} adicionarService={adicionarService}/>
                            )}
                        </div>
                    </div>
                    <h2>Serviços</h2>
                    <Container customClass="start">
                        {service && service.length > 0 ? ( service.map((service) => (
                                <ServiceCards 
                                service={service}
                                removeService={removeService}
                                />
                            ))) : 
                            (<p>Sem Serviço cadastrado!</p>) }
                    </Container>
                </Container>
            </div> 
            : <Loading />
        }
        </>
    )
}

export default Project
