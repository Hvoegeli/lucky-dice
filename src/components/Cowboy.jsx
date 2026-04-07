import { useState, useEffect, useRef } from 'react'
import './Cowboy.css'

export default function Cowboy({ smoking, hatWaving }) {
  const [smokeKey, setSmokeKey] = useState(0)
  const [showSmoke, setShowSmoke] = useState(false)
  const smokeTimer = useRef(null)

  const [hatWaveKey, setHatWaveKey] = useState(0)
  const [showHatWave, setShowHatWave] = useState(false)
  const hatTimer = useRef(null)

  useEffect(() => {
    if (!smoking) return
    clearTimeout(smokeTimer.current)
    setSmokeKey(k => k + 1)
    setShowSmoke(true)
    smokeTimer.current = setTimeout(() => setShowSmoke(false), 4500)
    return () => clearTimeout(smokeTimer.current)
  }, [smoking])

  useEffect(() => {
    if (!hatWaving) return
    clearTimeout(hatTimer.current)
    setHatWaveKey(k => k + 1)
    setShowHatWave(true)
    hatTimer.current = setTimeout(() => setShowHatWave(false), 3000)
    return () => clearTimeout(hatTimer.current)
  }, [hatWaving])

  return (
    <div className="cowboy-wrapper">
      <svg
        viewBox="0 0 120 365"
        className={`cowboy-svg ${showSmoke ? 'taking-drag' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        overflow="visible"
      >

        {/* ══ HEAD (drawn first so hat renders on top) ══ */}
        <ellipse cx="60" cy="102" rx="23" ry="26" className="ns" strokeWidth="2.5" fill="none" />

        {/* ══ STETSON HAT — hidden when arm is waving it ══ */}
        <g className={showHatWave ? 'head-hat hat-hidden' : 'head-hat'}>
          <path d="M 32,86 L 30,52 Q 42,43 54,50 Q 60,54 66,50 Q 78,43 90,52 L 88,86" className="ns" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
          <path d="M 54,50 Q 60,54 66,50" className="ns-dim" strokeWidth="1.5" fill="none" />
          <line x1="33" y1="80" x2="87" y2="80" className="ns" strokeWidth="2.5" />
          <line x1="10" y1="86" x2="110" y2="86" className="ns" strokeWidth="3.5" strokeLinecap="round" />
        </g>

        {/* ══ FACE ══ */}
        {/* Ears */}
        <path d="M 37,98 Q 33,103 37,110" className="ns" strokeWidth="2" fill="none" />
        <path d="M 83,98 Q 87,103 83,110" className="ns" strokeWidth="2" fill="none" />
        {/* Eyebrows */}
        <path d="M 46,88 Q 52,83 58,88" className="ns" strokeWidth="2" fill="none" />
        <path d="M 62,88 Q 68,83 74,88" className="ns" strokeWidth="2" fill="none" />
        {/* Eyes — whites + pupils */}
        <ellipse cx="52" cy="95" rx="5" ry="4" className="ns" strokeWidth="2" fill="none" />
        <circle  cx="53" cy="95" r="2"   className="ns-fill" />
        <ellipse cx="68" cy="95" rx="5" ry="4" className="ns" strokeWidth="2" fill="none" />
        <circle  cx="69" cy="95" r="2"   className="ns-fill" />
        {/* Nose */}
        <path d="M 57,102 L 55,110 Q 60,113 65,110 L 63,102" className="ns-dim" strokeWidth="1.5" fill="none" />
        {/* Thick cowboy mustache */}
        <path d="M 47,115 Q 54,122 60,115 Q 66,122 73,115" className="ns" strokeWidth="2.5" fill="none" />
        {/* Smile */}
        <path d="M 52,120 Q 60,126 68,120" className="ns" strokeWidth="2" fill="none" />

        {/* ══ CIGAR ══ */}
        <line x1="49" y1="118" x2="20" y2="112" className="ns" strokeWidth="3" strokeLinecap="round" />
        {/* Cigar ring/band */}
        <line x1="36" y1="115.5" x2="36" y2="115.5" className="ns-bright" strokeWidth="5" strokeLinecap="round" />
        {/* Ember */}
        <circle cx="18" cy="111" r="3.5" className={`ember ${showSmoke ? 'ember-glow' : ''}`} />

        {/* ══ NECK ══ */}
        <line x1="52" y1="128" x2="50" y2="142" className="ns" strokeWidth="3" strokeLinecap="round" />
        <line x1="68" y1="128" x2="70" y2="142" className="ns" strokeWidth="3" strokeLinecap="round" />

        {/* ══ SHIRT COLLAR ══ */}
        <path d="M 52,128 L 38,146 L 54,149" className="ns" strokeWidth="2" fill="none" strokeLinejoin="round" />
        <path d="M 68,128 L 82,146 L 66,149" className="ns" strokeWidth="2" fill="none" strokeLinejoin="round" />

        {/* ══ PLAID SHIRT BODY ══ */}
        {/* Shirt outline */}
        <path d="M 26,146 L 94,146 L 96,228 L 24,228 Z" className="ns" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
        {/* Plaid vertical stripes */}
        <line x1="40"  y1="146" x2="39"  y2="228" className="ns-plaid" strokeWidth="1.2" />
        <line x1="54"  y1="146" x2="53"  y2="228" className="ns-plaid" strokeWidth="1.2" />
        <line x1="72"  y1="146" x2="73"  y2="228" className="ns-plaid" strokeWidth="1.2" />
        <line x1="86"  y1="146" x2="87"  y2="228" className="ns-plaid" strokeWidth="1.2" />
        {/* Plaid horizontal stripes */}
        <line x1="26" y1="160" x2="94" y2="160" className="ns-plaid" strokeWidth="1.2" />
        <line x1="26" y1="174" x2="95" y2="174" className="ns-plaid" strokeWidth="1.2" />
        <line x1="25" y1="188" x2="95" y2="188" className="ns-plaid" strokeWidth="1.2" />
        <line x1="25" y1="202" x2="95" y2="202" className="ns-plaid" strokeWidth="1.2" />
        <line x1="24" y1="216" x2="96" y2="216" className="ns-plaid" strokeWidth="1.2" />
        {/* Button placket center line */}
        <line x1="60" y1="149" x2="60" y2="228" className="ns" strokeWidth="1.5" />
        {/* Shirt pocket */}
        <rect x="32" y="163" width="16" height="14" rx="1" className="ns-dim" strokeWidth="1.5" fill="none" />
        <line x1="32" y1="170" x2="48" y2="170" className="ns-dim" strokeWidth="1" />

        {/* ══ SUSPENDERS ══ */}
        <path d="M 37,143 L 44,228" className="ns-bright" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 83,143 L 76,228" className="ns-bright" strokeWidth="2.5" strokeLinecap="round" />
        {/* Suspender buckles at waist */}
        <rect x="41" y="223" width="7" height="6" rx="1" className="ns-bright" strokeWidth="1.5" fill="none" />
        <rect x="72" y="223" width="7" height="6" rx="1" className="ns-bright" strokeWidth="1.5" fill="none" />

        {/* ══ WAISTBAND + BELT BUCKLE ══ */}
        <line x1="24" y1="228" x2="96" y2="228" className="ns" strokeWidth="4" strokeLinecap="round" />
        <rect x="52" y="224" width="16" height="9" rx="2" className="ns-bright" strokeWidth="2" fill="none" />
        {/* Buckle prong */}
        <line x1="60" y1="224" x2="60" y2="233" className="ns-bright" strokeWidth="1.5" />

        {/* ══ JEANS ══ */}
        {/* Left leg */}
        <line x1="24" y1="228" x2="20" y2="312" className="ns" strokeWidth="3" strokeLinecap="round" />
        <line x1="57" y1="228" x2="53" y2="312" className="ns" strokeWidth="3" strokeLinecap="round" />
        <line x1="20" y1="312" x2="53" y2="312" className="ns" strokeWidth="2.5" strokeLinecap="round" />
        {/* Right leg */}
        <line x1="96" y1="228" x2="100" y2="312" className="ns" strokeWidth="3" strokeLinecap="round" />
        <line x1="63" y1="228" x2="67" y2="312" className="ns" strokeWidth="3" strokeLinecap="round" />
        <line x1="67" y1="312" x2="100" y2="312" className="ns" strokeWidth="2.5" strokeLinecap="round" />
        {/* Crotch seam */}
        <path d="M 60,228 Q 57,244 55,248" className="ns-dim" strokeWidth="1.5" fill="none" />
        <path d="M 60,228 Q 63,244 65,248" className="ns-dim" strokeWidth="1.5" fill="none" />
        {/* Knee detail */}
        <path d="M 22,274 Q 36,270 52,274" className="ns-dim" strokeWidth="1" fill="none" />
        <path d="M 68,274 Q 82,270 98,274" className="ns-dim" strokeWidth="1" fill="none" />

        {/* ══ COWBOY BOOTS ══ */}
        {/* Left boot — toe points left */}
        <path d="M 18,312 Q 36,304 54,312" className="ns" strokeWidth="2" fill="none" />
        {/* Shaft sides */}
        <line x1="18" y1="312" x2="12" y2="340" className="ns" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="52" y1="312" x2="48" y2="338" className="ns" strokeWidth="2.5" strokeLinecap="round" />
        {/* Pointed toe curving left */}
        <path d="M 12,340 Q 2,346 0,352 L 2,354" className="ns" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Sole */}
        <line x1="2" y1="354" x2="48" y2="352" className="ns" strokeWidth="2.5" strokeLinecap="round" />
        {/* Heel block */}
        <path d="M 4,354 L 6,364 L 20,364 L 20,352" className="ns" strokeWidth="2" fill="none" strokeLinejoin="round" />
        {/* Boot stitching */}
        <path d="M 22,318 Q 36,314 50,318" className="ns-dim" strokeWidth="1" fill="none" />
        {/* Spur */}
        <line x1="6" y1="364" x2="2" y2="360" className="ns-bright" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="0" cy="359" r="3" className="ns-bright" strokeWidth="1.5" fill="none" />

        {/* Right boot — toe points right */}
        <path d="M 66,312 Q 84,304 102,312" className="ns" strokeWidth="2" fill="none" />
        <line x1="68" y1="312" x2="72" y2="338" className="ns" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="102" y1="312" x2="108" y2="340" className="ns" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 108,340 Q 118,346 120,352 L 118,354" className="ns" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <line x1="72" y1="352" x2="118" y2="354" className="ns" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 116,354 L 114,364 L 100,364 L 100,352" className="ns" strokeWidth="2" fill="none" strokeLinejoin="round" />
        <path d="M 70,318 Q 84,314 98,318" className="ns-dim" strokeWidth="1" fill="none" />

        {/* ══ LEFT ARM — idle wave or hat wave ══ */}
        <g className={showHatWave ? 'hat-wave-arm' : 'wave-arm'} key={showHatWave ? 'hat' : 'idle'}>
          {/* Sleeve */}
          <path d="M 26,158 L 8,122 L 16,104" className="ns" strokeWidth="6" fill="none" strokeLinejoin="round" strokeLinecap="round" />
          {/* Sleeve cuff */}
          <path d="M 14,108 Q 20,103 26,108" className="ns" strokeWidth="2" fill="none" />
          {/* Hand */}
          <path d="M 16,104 Q 14,95 20,92 Q 26,90 28,98" className="ns" strokeWidth="2" fill="none" />
          <path d="M 20,92 L 22,87" className="ns" strokeWidth="2" strokeLinecap="round" />
          <path d="M 24,91 L 27,87" className="ns" strokeWidth="2" strokeLinecap="round" />
          {/* Mini hat held in hand — only visible during hat wave */}
          {showHatWave && (
            <g key={hatWaveKey}>
              {/* Crown — cattleman crease matching head hat proportions */}
              <path d="M -2,84 L -4,57 Q 7,48 17,54 Q 20,57 23,54 Q 33,48 44,57 L 42,84" className="ns" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
              {/* Crease */}
              <path d="M 17,54 Q 20,57 23,54" className="ns-dim" strokeWidth="1.5" fill="none" />
              {/* Band */}
              <line x1="-1" y1="78" x2="41" y2="78" className="ns" strokeWidth="2" />
              {/* Brim */}
              <line x1="-14" y1="84" x2="56" y2="84" className="ns" strokeWidth="3.5" strokeLinecap="round" />
            </g>
          )}
        </g>

        {/* ══ RIGHT ARM — leaning on wall ══ */}
        <path d="M 94,158 L 112,142 L 119,134" className="ns" strokeWidth="6" fill="none" strokeLinejoin="round" strokeLinecap="round" />

        {/* ══ SMOKE PUFFS ══ */}
        {showSmoke && (
          <g key={smokeKey}>
            <circle cx="18" cy="106" r="2" className="smoke smoke-1" />
            <circle cx="18" cy="106" r="2" className="smoke smoke-2" />
            <circle cx="18" cy="106" r="2" className="smoke smoke-3" />
            <circle cx="18" cy="106" r="2" className="smoke smoke-4" />
            <circle cx="18" cy="106" r="2" className="smoke smoke-5" />
          </g>
        )}

      </svg>
    </div>
  )
}
