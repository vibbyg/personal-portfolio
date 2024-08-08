import React, { CSSProperties } from "react"
import './Hole.css';

interface Hole {
  onHoleClick?: (event: any) => void,
  offsetTop?: number,
  offsetLeft?: number,
  color?: string,
  position?: string,
}

export const Hole = ({onHoleClick, offsetLeft, offsetTop, color, position}: Hole) => {
  const HoleStyle: CSSProperties = {
    left: `${offsetLeft}%` || `${Math.floor(Math.random() * 12)}px`,
    top: `${offsetTop}%` || `${Math.floor(Math.random() * 12)}px`,
    margin: '2rem',
  };

  
  return (
    <div style={HoleStyle} className={`md:scale-150 hover:cursor-pointer md:hover:animate-wobbling z-10 ${position || 'fixed'}`} onClick={onHoleClick}>
      <div className={`hole ${color ?? "default"}`}>
      </div>
    </div>
  )

}