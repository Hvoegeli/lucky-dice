import { useState, useEffect, useRef } from 'react'
import './CancanGirl.css'

export default function CancanGirl({ kicking }) {
  const [kickKey, setKickKey] = useState(0)
  const [showKick, setShowKick] = useState(false)
  const kickTimer = useRef(null)

  useEffect(() => {
    if (!kicking) return
    clearTimeout(kickTimer.current)
    setKickKey(k => k + 1)
    setShowKick(true)
    kickTimer.current = setTimeout(() => setShowKick(false), 2500)
    return () => clearTimeout(kickTimer.current)
  }, [kicking])

  return (
    <div className="cancan-wrapper">
      <svg
        viewBox="0 0 120 365"
        className="cancan-svg"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        overflow="visible"
      >

        {/* ══ HEADDRESS FEATHERS ══ */}
        <path d="M 52,66 Q 16,50 8,18"      className="ns" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path d="M 54,64 Q 26,40 24,8"      className="ns" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path d="M 57,62 Q 40,32 40,6"      className="ns" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 60,61 Q 60,28 60,5"      className="ns" strokeWidth="2.8" fill="none" strokeLinecap="round" />
        <path d="M 63,62 Q 80,32 80,6"      className="ns" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 66,64 Q 94,40 96,8"      className="ns" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path d="M 68,66 Q 104,50 112,18"   className="ns" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        {/* Headdress band */}
        <path d="M 43,72 Q 60,66 77,72"     className="ns-bright" strokeWidth="3.5" fill="none" strokeLinecap="round" />

        {/* ══ HEAD ══ */}
        <ellipse cx="60" cy="88" rx="19" ry="21" className="ns" strokeWidth="2.5" fill="none" />

        {/* ══ HAIR — upswept sides ══ */}
        <path d="M 44,72 Q 42,80 41,88"     className="ns-dim" strokeWidth="2"   fill="none" strokeLinecap="round" />
        <path d="M 76,72 Q 78,80 79,88"     className="ns-dim" strokeWidth="2"   fill="none" strokeLinecap="round" />

        {/* ══ FACE ══ */}
        {/* Left eye + lash */}
        <path d="M 47,83 Q 51,78 55,82"     className="ns"     strokeWidth="1.5" fill="none" />
        <ellipse cx="51" cy="86" rx="4.5" ry="3.5" className="ns" strokeWidth="1.8" fill="none" />
        <circle  cx="52" cy="86" r="2"      className="ns-fill" />
        {/* Right eye + lash */}
        <path d="M 65,83 Q 69,78 73,82"     className="ns"     strokeWidth="1.5" fill="none" />
        <ellipse cx="69" cy="86" rx="4.5" ry="3.5" className="ns" strokeWidth="1.8" fill="none" />
        <circle  cx="70" cy="86" r="2"      className="ns-fill" />
        {/* Nose */}
        <path d="M 58,94 Q 60,97 62,94"     className="ns-dim" strokeWidth="1.2" fill="none" />
        {/* Lips */}
        <path d="M 53,101 Q 57,97 60,101 Q 63,97 67,101" className="ns" strokeWidth="2" fill="none" />
        <path d="M 53,101 Q 60,106 67,101"  className="ns"     strokeWidth="1.5" fill="none" />
        {/* Beauty mark */}
        <circle cx="73" cy="96" r="1.5"     className="ns-fill" />

        {/* ══ NECK ══ */}
        <line x1="55" y1="109" x2="53" y2="124" className="ns" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="65" y1="109" x2="67" y2="124" className="ns" strokeWidth="2.5" strokeLinecap="round" />

        {/* ══ CORSET BODICE ══ */}
        {/* Décolletage neckline */}
        <path d="M 53,124 Q 60,118 67,124"  className="ns" strokeWidth="2" fill="none" />
        {/* Corset hourglass outline */}
        <path d="M 36,136 L 28,158 L 36,180 L 44,192 L 76,192 L 84,180 L 92,158 L 84,136"
              className="ns" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
        {/* Center placket */}
        <line x1="60" y1="120" x2="60" y2="192" className="ns" strokeWidth="1.5" />
        {/* Boning lines */}
        <line x1="44" y1="136" x2="40" y2="192" className="ns-dim" strokeWidth="1.2" />
        <line x1="76" y1="136" x2="80" y2="192" className="ns-dim" strokeWidth="1.2" />
        <line x1="52" y1="130" x2="50" y2="192" className="ns-dim" strokeWidth="1"   />
        <line x1="68" y1="130" x2="70" y2="192" className="ns-dim" strokeWidth="1"   />
        {/* Lacing crosses */}
        <path d="M 54,142 L 57,147 M 63,142 L 66,147" className="ns-plaid" strokeWidth="1.2" />
        <path d="M 52,155 L 56,160 M 64,155 L 68,160" className="ns-plaid" strokeWidth="1.2" />
        <path d="M 52,168 L 56,173 M 64,168 L 68,173" className="ns-plaid" strokeWidth="1.2" />
        <path d="M 52,181 L 56,186 M 64,181 L 68,186" className="ns-plaid" strokeWidth="1.2" />
        {/* Bust curve */}
        <path d="M 36,136 Q 48,147 60,141 Q 72,147 84,136" className="ns" strokeWidth="1.8" fill="none" />

        {/* ══ ARMS ══ */}
        {/* Left arm */}
        <path d="M 36,144 L 14,164 L 6,178"
              className="ns" strokeWidth="6" fill="none" strokeLinejoin="round" strokeLinecap="round" />
        {/* Left glove cuff */}
        <path d="M 8,174 Q 12,170 16,174"   className="ns" strokeWidth="2" fill="none" />
        {/* Left hand */}
        <path d="M 6,178 Q 2,185 -1,181 Q -2,174 4,172" className="ns" strokeWidth="1.8" fill="none" />

        {/* Right arm */}
        <path d="M 84,144 L 106,164 L 114,178"
              className="ns" strokeWidth="6" fill="none" strokeLinejoin="round" strokeLinecap="round" />
        {/* Right glove cuff */}
        <path d="M 104,174 Q 108,170 112,174" className="ns" strokeWidth="2" fill="none" />
        {/* Right hand */}
        <path d="M 114,178 Q 118,185 121,181 Q 122,174 116,172" className="ns" strokeWidth="1.8" fill="none" />

        {/* ══ RUFFLED CANCAN SKIRT ══ */}
        {/* Waistband */}
        <line x1="38" y1="192" x2="82" y2="192" className="ns-bright" strokeWidth="3" strokeLinecap="round" />
        {/* Skirt sides */}
        <line x1="38" y1="192" x2="10" y2="279" className="ns" strokeWidth="1.5" />
        <line x1="82" y1="192" x2="110" y2="279" className="ns" strokeWidth="1.5" />
        {/* Ruffle layer 1 */}
        <path d="M 24,214 Q 32,206 40,214 Q 48,222 56,214 Q 64,206 72,214 Q 80,222 88,214 Q 96,206 103,212"
              className="ns" strokeWidth="2" fill="none" />
        {/* Ruffle layer 2 */}
        <path d="M 16,237 Q 26,227 36,237 Q 46,247 56,237 Q 66,227 76,237 Q 86,247 96,237 Q 106,227 113,234"
              className="ns" strokeWidth="2" fill="none" />
        {/* Ruffle layer 3 */}
        <path d="M 12,257 Q 24,247 36,257 Q 48,267 60,257 Q 72,247 84,257 Q 96,267 108,257 Q 116,249 120,253"
              className="ns" strokeWidth="2" fill="none" />
        {/* Hem ruffle */}
        <path d="M 10,277 Q 24,267 38,277 Q 52,287 66,277 Q 80,267 94,277 Q 108,287 120,279"
              className="ns" strokeWidth="2.5" fill="none" />
        {/* Skirt volume lines */}
        <path d="M 60,192 L 36,279"  className="ns-plaid" strokeWidth="1" />
        <path d="M 60,192 L 60,279"  className="ns-plaid" strokeWidth="1" />
        <path d="M 60,192 L 84,279"  className="ns-plaid" strokeWidth="1" />

        {/* ══ LEFT LEG — standing ══ */}
        <line x1="42" y1="281" x2="36" y2="344" className="ns" strokeWidth="3" strokeLinecap="round" />
        <line x1="52" y1="281" x2="50" y2="344" className="ns" strokeWidth="3" strokeLinecap="round" />
        <path d="M 36,344 Q 43,338 50,344"      className="ns" strokeWidth="2" fill="none" />
        {/* Stocking band */}
        <path d="M 37,310 Q 46,306 51,310"      className="ns-bright" strokeWidth="2" fill="none" />
        {/* Fishnet crosshatch */}
        <line x1="43" y1="281" x2="37" y2="344" className="ns-plaid" strokeWidth="0.8" />
        <line x1="38" y1="296" x2="50" y2="344" className="ns-plaid" strokeWidth="0.8" />
        {/* Pointed-toe shoe */}
        <path d="M 30,344 Q 40,349 50,348"      className="ns" strokeWidth="2" fill="none" strokeLinecap="round" />
        <line x1="50" y1="344" x2="50" y2="355" className="ns" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="344" x2="26" y2="355" className="ns" strokeWidth="2" strokeLinecap="round" />
        <line x1="26" y1="355" x2="50" y2="355" className="ns" strokeWidth="2.5" strokeLinecap="round" />
        {/* Heel block */}
        <path d="M 28,355 L 26,365 L 38,365 L 38,355" className="ns" strokeWidth="2" fill="none" strokeLinejoin="round" />

        {/* ══ RIGHT LEG — cancan kick! ══ */}
        <g className={showKick ? 'kick-leg kicking' : 'kick-leg'} key={kickKey}>
          <line x1="68" y1="281" x2="70" y2="344" className="ns" strokeWidth="3" strokeLinecap="round" />
          <line x1="78" y1="281" x2="84" y2="344" className="ns" strokeWidth="3" strokeLinecap="round" />
          <path d="M 70,344 Q 77,338 84,344"      className="ns" strokeWidth="2" fill="none" />
          {/* Stocking band */}
          <path d="M 69,310 Q 77,306 83,310"      className="ns-bright" strokeWidth="2" fill="none" />
          {/* Fishnet crosshatch */}
          <line x1="73" y1="281" x2="70" y2="344" className="ns-plaid" strokeWidth="0.8" />
          <line x1="70" y1="296" x2="83" y2="344" className="ns-plaid" strokeWidth="0.8" />
          {/* Pointed-toe shoe */}
          <path d="M 70,344 Q 77,349 90,348"      className="ns" strokeWidth="2" fill="none" strokeLinecap="round" />
          <line x1="70" y1="344" x2="70" y2="355" className="ns" strokeWidth="2" strokeLinecap="round" />
          <line x1="90" y1="344" x2="94" y2="355" className="ns" strokeWidth="2" strokeLinecap="round" />
          <line x1="70" y1="355" x2="94" y2="355" className="ns" strokeWidth="2.5" strokeLinecap="round" />
          {/* Heel block */}
          <path d="M 90,355 L 94,365 L 106,365 L 106,355" className="ns" strokeWidth="2" fill="none" strokeLinejoin="round" />
        </g>

      </svg>
    </div>
  )
}
