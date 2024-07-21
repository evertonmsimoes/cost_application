import { useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import Styles from '../project/ProjectForm.module.css'
import Message from '../layout/Message'


function ServiceForm( { textBtn, project, closeFrom, adicionarService } ){
    const [service, setService] = useState({"project": {"id": project.id}});
    const [informacao, setInformacao] = useState();
    const [type, setType] = useState();


    async function createService(){
        setInformacao(null);
        
        if(parseInt(project.budget_in_cents)  >= (parseInt(project.cost) + parseInt(service.cost_in_cents))){
            fetch("http://localhost:8090/services", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(service)
            })
            .then((resp) => resp.json())
            .then((data) => {
                setInformacao("Serviço Cadastrado com Sucesso!")
                setType("success")
                adicionarService(service)
            })
            .catch((err) =>{ 
                console.log(err)
            })
        } 
        if(parseInt(project.budget_in_cents)  <= (parseInt(project.cost) + parseInt(service.cost_in_cents))){
            setInformacao("Valor de Serviço não pode ultrapassa o Limite do Projeto!")
            setType("error")
            }
    } 
    
    function handleChange(e){
        setService({...service, [e.target.name]: e.target.value })
    }
    
    const submit = (e) => {

        
        setType('');

        e.preventDefault()
        createService()
    }

    return (
        <form className={Styles.form} onSubmit={submit}>
            {informacao && <Message msn={informacao} type={type}/>}
            <Input type="text" text="Nome do Serviço" name="name" placeholder="insira o nome do serviço" handlerOnChange={handleChange}/>
            <Input type="number" text="Custo do Serviço" name="cost_in_cents" placeholder="insira o valor do serviço" handlerOnChange={handleChange}/>
            <Input type="teste" text="Descrição do Serviço" name="description" placeholder="Descreca o Serviço" handlerOnChange={handleChange}/>
            <SubmitButton text={textBtn} />
        </form>
    )
}

export default ServiceForm
