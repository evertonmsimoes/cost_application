import { useNavigate } from 'react-router-dom'
import Styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm';

function NewProject(){
    const history = useNavigate();

    function creatProject(project){
        fetch("http://localhost:8090/project", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            }, body: JSON.stringify(project),
        }).then((response) => response.json())
        .then((data) => {
            console.log(data)
            history('/projects', { state: { message: 'Projeto criado com sucesso!' } })
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={Styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie o seu projeto para depois adicionar os serviços!</p>
            <ProjectForm handleSubmit={creatProject} bnt_text="Criar Projeto"/>
            
        </div>
    )
}

export default NewProject;
