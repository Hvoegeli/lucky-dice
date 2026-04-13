import { useState, useCallback } from 'react'
import Die from './components/Die'
import Cowboy from './components/Cowboy'
import CancanGirl from './components/CancanGirl'
import './App.css'

const DICE_COUNT = 5
const ROLL_DURATION = 1000

export default function App() {
  const [values, setValues] = useState(Array(DICE_COUNT).fill(0))
  const [isRolling, setIsRolling] = useState(false)
  const [hasRolled, setHasRolled] = useState(false)
  const [smokingTrigger, setSmokingTrigger] = useState(0)
  const [hatWaveTrigger, setHatWaveTrigger] = useState(0)
  const [cancanTrigger, setCancanTrigger] = useState(0)

  const roll = useCallback(() => {
    if (isRolling) return
    setIsRolling(true)
    setHasRolled(false)

    const finalValues = Array.from({ length: DICE_COUNT }, () => Math.floor(Math.random() * 10))

    setTimeout(() => {
      setValues(finalValues)
      setIsRolling(false)
      setHasRolled(true)

      const hasAdjDouble    = finalValues.some((v, i) => i < finalValues.length - 1 && v === finalValues[i + 1])
      const hasAdjDoubleOne = finalValues.some((v, i) => i < finalValues.length - 1 && v === 1 && finalValues[i + 1] === 1)

      // Smoke only fires when a 1 appears but NOT as part of an adjacent pair of 1s
      if (finalValues.includes(1) && !hasAdjDoubleOne) setSmokingTrigger(t => t + 1)
      // Hat wave fires on any adjacent double (including 11 — which suppresses smoke above)
      if (hasAdjDouble) setHatWaveTrigger(t => t + 1)
      // Cancan kick fires when any die shows 7
      if (finalValues.includes(7)) setCancanTrigger(t => t + 1)
    }, ROLL_DURATION)
  }, [isRolling])

  const luckyNumber = hasRolled ? values.join('') : null

  return (
    <div className="app dark">

      {/* Header */}
      <header className="header">
        <h1 className="title">Lucky Dice</h1>
      </header>

      {/* Scrolling marquee */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          <span className="marquee-text">
            TEST YOUR LUCK &nbsp;·&nbsp; ROLL THE DICE &nbsp;·&nbsp;
            TEST YOUR LUCK &nbsp;·&nbsp; ROLL THE DICE &nbsp;·&nbsp;
            TEST YOUR LUCK &nbsp;·&nbsp; ROLL THE DICE &nbsp;·&nbsp;
            TEST YOUR LUCK &nbsp;·&nbsp; ROLL THE DICE &nbsp;·&nbsp;
          </span>
          <span className="marquee-text" aria-hidden="true">
            TEST YOUR LUCK &nbsp;·&nbsp; ROLL THE DICE &nbsp;·&nbsp;
            TEST YOUR LUCK &nbsp;·&nbsp; ROLL THE DICE &nbsp;·&nbsp;
            TEST YOUR LUCK &nbsp;·&nbsp; ROLL THE DICE &nbsp;·&nbsp;
            TEST YOUR LUCK &nbsp;·&nbsp; ROLL THE DICE &nbsp;·&nbsp;
          </span>
        </div>
      </div>

      {/* Main content */}
      <main className="main">

        {/* Dice board */}
        <div className="dice-board">
          {values.map((v, i) => (
            <Die key={i} value={v} isRolling={isRolling} />
          ))}
        </div>

        {/* Lucky number result */}
        {hasRolled && !isRolling && (
          <div className="result" key={luckyNumber}>
            <span className="result-label">Your lucky number</span>
            <span className="lucky-number">{luckyNumber}</span>
          </div>
        )}

        {/* Roll button */}
        <button
          className={`roll-btn ${isRolling ? 'rolling' : ''}`}
          onClick={roll}
          disabled={isRolling}
        >
          {isRolling ? 'Rolling...' : 'Roll'}
        </button>

      </main>

      <Cowboy smoking={smokingTrigger} hatWaving={hatWaveTrigger} />
      <CancanGirl kicking={cancanTrigger} />
    </div>
  )
}
