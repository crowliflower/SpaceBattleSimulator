import { useState } from 'react'
import './App.css'

import Player from './components/Player.jsx'
import Enemy from './components/Enemy.jsx'
import Attack from './components/Attack.jsx'
import BattleLog from './components/BattleLog.jsx'
import Initialize from './components/Initialize.jsx'


function App() {

  const INITIAL_STATE = "running";
  const BASE_HEALTH = 100;

  const [playerHealth, setPlayerHealth] = useState(BASE_HEALTH)
  const [enemyHealth, setEnemyHealth] = useState(BASE_HEALTH)

  const [gameState, setGameState] = useState(INITIAL_STATE);

  constant 


  return (
    <>
      <div className='Screen'>
        <h2>Space Battle Simulator</h2>
        <button className=''></button>
        <Player />
        <button className='fire' onClick={Attack}>

        </button>
        <Enemy />
        <BattleLog />



      </div>
    </>
  )
}

export default App
 