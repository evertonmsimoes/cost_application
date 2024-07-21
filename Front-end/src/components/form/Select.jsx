import Style from './Select.module.css'

function Select( { text, name, options, handlerOnChange, value }){
    return(
        <div className={Style.from_control}>
            <label htmlFor={name}>{text}: </label>
            <select name={name} id={name} onChange={handlerOnChange} value={value}>
                <option>Selecione uma opção</option>
                {options.map((option) => (<option value={option.id} key={option.id}>{option.name}</option>))}
            </select>
        </div>
    )
}

export default Select;