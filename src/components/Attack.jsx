

import "./Attack.css"

const Attack = ({PlayerHealth, EnemyHealth}) => {

    return (
        <button className="attack" onClick={Attack()}>
            Fire
        </button>
    )
}

export default Attack