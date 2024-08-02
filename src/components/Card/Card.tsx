import { ReactNode } from "react"
import './Card.css'
import me from './../../../public/assets/me.jpg'
import Image from "next/image"
import { ArrowRight } from "../ArrowRight"
interface Card {
  color: string,
  title?: string,
  link?: string,
  children?: ReactNode,
  open: Boolean,
  onCardClick?: any
}

export const Card = ({ title, link, children, open, color, onCardClick }: Card) => {

  return open && 
      (<div>
        <div className={`card-${color}`}>
          <div
            className="back"
            style={{ top: `20vh`, left: `16vw` }}
          >
          </div>
          <div
            className="front"
            style={{ top: `12vh`, left: `20vw` }}
          >
          </div>
          <div
            className="center fixed overflow-hidden flex flex-col justify-between"
            style={{ top: `16vh`, left: `18vw` }}
          >
            <h2>
              {title ?? "FILL ME IN!"}
            </h2>
            <div className="overflow-scroll pr-4">
              {children ?? 'nothing to see here...'}
            </div>
            <h3 className="self-end scale-75"><ArrowRight /></h3>
          </div>
        </div>
        <div className="w-screen h-screen z-40 backdrop-brightness-90 backdrop-blur-sm relative" onClick={onCardClick} />
        </div>
      )
}