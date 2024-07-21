import Message from "../layout/Message";
import { useLocation } from "react-router";
import Container from '../layout/Container'
import LinkBottom from "../layout/LinkButton";
import  ProjectCard  from '../project/ProjectCards.jsx'
import Loading from '../layout/Loading.jsx'
import Styles from './Projects.module.css' 
import { useEffect, useState } from "react";



function Projects (){
    const [project, setProject] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projecMenssage, setProjecMenssage] = useState('')

    

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() => {
        fetch("http://localhost:8090/project",{
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    } )
    .then((resp) => resp.json() )
    .then((data) => {
        setProject(data)
        setRemoveLoading(true)
    })
    .catch((err) => console.log(err))
    }, [])

    function desableProject(id){
        fetch("http://localhost:8090/project", {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "id": id,
                "active": false
            })
        })
        .then((resp) => resp.json)
        .then(() => {
            setProject(project.filter((project) => project.id !== id))
            setProjecMenssage("Projeto sendo removido com sucesso!")
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={Styles.project_container}>
            <div className={Styles.tittle_container}>
                <h1>Meus Projetos</h1>
                <LinkBottom to="/newproject" text="Criar Novo Projeto" />
            </div>
            {message && <Message  type={"success"} msn={message} />}
            {projecMenssage && <Message  type={"success"} msn={projecMenssage} />}

            
            <Container constumCalss="start">
                { project.length > 0 && project.map((project) =>
                ( <ProjectCard 
                    id={project.id}
                    name={project.name}
                    budget_in_cents={project.budget_in_cents}
                    category={project.categories}
                    handleDesable={desableProject}
                      />)
                )}
                {!removeLoading && <Loading />}
                {removeLoading && project.length == 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}
            </Container>
        </div>
    )
}

export default Projects;
