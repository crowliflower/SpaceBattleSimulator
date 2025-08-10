import {useState} from "react"

const Initialize = ({setPlayerHealth, BASE_HEALTH}) => {

    
    return (
        <div>
            <button className="initialize" onClick={setPlayerHealth(BASE_HEALTH)}>
                Restart
            </button>
        </div>
    )
}

export default Initialize