import React, { CSSProperties } from "react"


interface Hole {
  onHoleClick?: (event: any) => void,
  offsetTop?: number,
  offsetLeft?: number,
  color?: string
}

export const Hole = ({onHoleClick, offsetLeft, offsetTop, color}: Hole) => {
  const HoleStyle: CSSProperties = {
    position: 'fixed',
    left: `${offsetLeft}%` || `${Math.floor(Math.random() * 12)}px`,
    top: `${offsetTop}%` || `${Math.floor(Math.random() * 12)}px`,
    margin: '2rem',
  };

  
  return (
    <div style={HoleStyle} className="md:scale-150 hover:cursor-pointer md:hover:animate-wobbling z-10" onClick={onHoleClick}>
      <svg width="87" height="13" viewBox="0 0 87 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
        <defs>
          <linearGradient id="LightGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F080F0" />
          </linearGradient>
          <linearGradient id="DarkGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#F080F0" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
          <linearGradient id="greenGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={"var(--green-light)"}/>
            <stop offset="100%" stopColor={"var(--green-default"} />
          </linearGradient>
          <linearGradient id="purpleGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={"var(--purple-light"} />
            <stop offset="100%" stopColor={"var(--purple-default"} />
          </linearGradient>
          <linearGradient id="blueGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={"var(--blue-light"} />
            <stop offset="100%" stopColor={"var(--blue-default)"} />
          </linearGradient>
        </defs>
        <ellipse cx="43.5" cy="6.5" rx="43.5" ry="6.5" fill={`url(#${color ?? "purple"}Gradient)`}/>
      </svg>
    </div>
  )

}