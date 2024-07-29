import React, { CSSProperties, useRef } from "react"

interface Hole {
  onHoleClick?: (event: any) => void,
}

export const Hole = ({onHoleClick}: Hole) => {
  const HoleStyle: CSSProperties = {
    position: 'relative',
    margin: '2rem',
    top: `${Math.floor(Math.random() * 10)}rem`,
    left: `${Math.floor(Math.random() * 10)}rem`,
    transform: 'translate(-50%, -50%)'
  };
  return (
    <div style={HoleStyle} onClick={onHoleClick}>
      <svg width="87" height="13" viewBox="0 0 87 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="43.5" cy="6.5" rx="43.5" ry="6.5" fill="#D9D9D9"/>
      </svg>
    </div>
  )

}