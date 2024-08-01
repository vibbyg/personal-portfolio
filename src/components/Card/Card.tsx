import { ReactNode } from "react"
import './Card.css'

interface Card {
  color: string,
  title?: string,
  link?: string,
  content?: ReactNode,
  open: Boolean,
  onCardClick?: any
}

export const Card = ({ title, link, content, open, color, onCardClick }: Card) => {

  return (
    <div>
      {open ?
      <div>
        <div className={`card-${color}`}>
          <div
            className="card back"
            style={{ top: `24vh`, left: `16vw` }}
          >
          </div>
          <div
            className="card front"
            style={{ top: `16vh`, left: `20vw` }}
          >
          </div>
          <div
            className="card center"
            style={{ top: `20vh`, left: `18vw` }}
          >
            <h2>
              {title ?? "FILL ME IN!"}
            </h2>
            <div className="flex flex-col">
              <h3>
                hey hey! my name is Vibhor and I’m a 3rd year Computer Science student at the University of Waterloo.
              </h3>
              <h3>
                I enjoy <span className="bold">creating</span> things - creating videos, creating projects, and most importantly, creating experiences.
              </h3>
              <h3>
                welcome to my corner of the internet. take a look into my life. and if you want to connect, hmu here here and here!
              </h3>
            </div>
          </div>
        </div>
        <div className="w-screen h-screen z-30 backdrop-brightness-90 backdrop-blur-sm relative" onClick={onCardClick} />
        </div>

        : null
      }
    </div>
  )

}