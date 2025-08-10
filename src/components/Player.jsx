import { useState } from "react";

const Player = ({BaseHealth}) => {
    const [playerHealth, setPlayerHealth] = useState(BaseHealth);
    setPlayerHealth () 


    return (
        <div className="player">
            <h3>Player Health : ${playerHealth}</h3>

        </div>
    )
}

export default Player
export function setPlayerHealth() {
    return {setPlayerHealth}
}