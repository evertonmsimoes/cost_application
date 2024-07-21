import Style from './ProjectForm.module.css'
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import { useEffect, useState } from 'react'

function ProjectForm({ handleSubmit, bnt_text, projectData }){
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {}) 

    useEffect(() => {
        fetch('http://localhost:8090/categories',{
        method: 'GET'
    }).then((resp) => resp.json()).then((data) => { setCategories(data) })
    .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e){
        setProject({ ...project, "categories": {"id": e.target.value}
         })
    }

    return (
    <form onSubmit={submit} className={Style.form}>
        <Input  type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do Projeto." handlerOnChange={handleChange} value={project.name}/>
        <Input  type="number" text="Orçamento do Projeto" name="budget_in_cents" placeholder="Insira o orçamento Total." handlerOnChange={handleChange} value={project.budget_in_cents}/>
        <Select name="id_category" text="Selecione a categoria" options={categories} handlerOnChange={handleCategory} value={project.categories && project.categories.id? project.categories.id : ""}  />
        <SubmitButton text={ bnt_text } />
    </form>
)
}

export default ProjectForm;
