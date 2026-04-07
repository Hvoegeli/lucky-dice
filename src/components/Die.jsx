import { useState, useEffect, useRef } from 'react'
import './Die.css'

export default function Die({ value, isRolling }) {
  const [displayValue, setDisplayValue] = useState(value ?? 0)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (isRolling) {
      intervalRef.current = setInterval(() => {
        setDisplayValue(Math.floor(Math.random() * 10))
      }, 75)
    } else {
      clearInterval(intervalRef.current)
      if (value !== undefined) setDisplayValue(value)
    }
    return () => clearInterval(intervalRef.current)
  }, [isRolling, value])

  return (
    <div className={`die ${isRolling ? 'rolling' : 'settled'}`}>
      <span className="die-number">{displayValue}</span>
    </div>
  )
}
