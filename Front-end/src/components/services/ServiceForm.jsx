import { useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import Styles from '../project/ProjectForm.module.css'

function handleChange(e){

}

function ServiceForms({textBtn}){
    return (
        <form className={Styles.form}>
            <Input type="text" text="Nome do Serviço" name="name" placeholder="insira o nome do serviço" handlerOnChange={handleChange}/>
            <Input type="number" text="Custo do Serviço" name="cost" placeholder="insira o valor do serviço" handlerOnChange={handleChange}/>
            <Input type="teste" text="Descrição do Serviço" name="description" placeholder="Descreca o Serviço" handlerOnChange={handleChange}/>
            <SubmitButton text={textBtn}/>
        </form>
    )
}

export default ServiceForms
