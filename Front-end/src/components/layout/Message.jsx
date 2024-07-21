import { useState, useEffect } from "react";
import Style from "./Message.module.css"

function Message( { msn, type } ){
    const [visable, setVisable] = useState(false);

    useEffect(() =>
        {
            if (!msn){
                setVisable(false)
                return
            }
            setVisable(true)
            const timer = setTimeout(() => {
                setVisable(false)
            }, 3000)
            return () => clearTimeout(timer)
        }, [msn]
    )

    return(
       <>
        {visable && (
            <div className={`${Style.messagem} ${Style[type]}`}>
                <p>{msn}</p>
            </div>
        )}
       </>
    )
}

export default Message;