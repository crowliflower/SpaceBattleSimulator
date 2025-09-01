import { useState } from 'react'
import './App.css'




function App({minDmg = 0, maxDmg = 50}) {

  const INITIAL_STATE = "running";
  const BASE_HEALTH = 100;

  const [playerHealth, setPlayerHealth] = useState(BASE_HEALTH);
  const [enemyHealth, setEnemyHealth] = useState(BASE_HEALTH);

  const [gameState, setGameState] = useState(INITIAL_STATE);

  function attackPhase() {
    const playerAttack = Math.floor(Math.random() * (maxDmg - minDmg + 1)) + minDmg;
		const enemyAttack = Math.floor(Math.random() * (maxDmg - minDmg + 1)) + minDmg;

    const newPlayerHealth = playerHealth - enemyAttack;
    const newEnemyHealth = enemyHealth - playerAttack;

    setPlayerHealth(newPlayerHealth);
    setEnemyHealth(newEnemyHealth);

    if (newPlayerHealth <= 0 && newEnemyHealth <= 0) 
    {
        setGameState("tie");
    } 
    else if (newEnemyHealth <= 0) 
    {
        setGameState("win");
    } 
    else if (newPlayerHealth <= 0) 
    {
        setGameState("lose");
    }
  }

  function initialize () {
    setEnemyHealth(BASE_HEALTH);
    setPlayerHealth(BASE_HEALTH);
    setGameState(INITIAL_STATE)
  }

  function renderGameState ()
	{
		switch (gameState)
	{
			case "win":
				return "You live to see another battle.";
			case "lose":
				return "The memory of your existence begins to fade the moment you pass.";
			case "tie":
				return "You lost, but you managed to bring your killer with you.";
			default:
				return "It's either your opponents life, or yours.";
		}
	}

  function renderHealth (currentHealth) {
    let status;

    if (currentHealth === BASE_HEALTH) {
      status = "Fresh and healthy";
    } else if (currentHealth <= 0) {
      status = "Dead and gone";
    } else if (currentHealth < BASE_HEALTH && currentHealth >= 45) {
      status = "Been worse";
    } else {
      status = "...Been better";
    }
    return `${currentHealth} ${status}`;
  }


  return (
    <div className={'screen'}>
      <div className={'title-box'}>
        <h2>Space Battle Simulator</h2>
      </div>

        <div className='game-box'>
          <div className={'player'}>
            <p>Player Health: <span className={"lifebar"}>{renderHealth(playerHealth)}</span></p>
          </div>
        

          {
            gameState === "running"
            &&
            <div className={"attack"}>
              <button onClick={attackPhase}>Commence Attack Phase</button>
            </div>
          }

          {
            gameState !== "running"
            &&
            <div className={"restart"}>
              <button onClick={initialize}>Begin anew.</button>
            </div>
          }

          <div className={'enemy'}>
            <p>Opponent Health: <span className={"lifebar"}>{renderHealth(enemyHealth)}</span></p>
          </div>
        </div>

        <div className={"message-box"}>
				  <p>{renderGameState()}</p>
			  </div>

      </div>
    
  );
}

export default App
 