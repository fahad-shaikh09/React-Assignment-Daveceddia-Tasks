import React, {useState} from "react";

function Room() {
const [isLit, setLit] = useState(true)
    return(

        <div className={isLit ? "lit" : "dark"} >
            {isLit ? "Light is On" : "Light is Off"} <br /> <br />
            <button onClick={ () => {setLit(!isLit) }} >Switch</button>
        </div>
    )
}

export default Room;