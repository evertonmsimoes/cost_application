import Style from './Container.module.css'

function Container(props){
    return(
        <div className={`${Style.container} ${Style[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Container;