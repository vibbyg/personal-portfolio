import { ReactNode } from "react"
import './Dialog.css'
import { ArrowRight } from "../ArrowRight"
import Link from "next/link"
interface Dialog {
  color: string,
  title?: string,
  link?: string,
  children?: ReactNode,
  open: Boolean,
  onDialogClick?: any
}

export const Dialog = ({ title, link, children, open, color, onDialogClick }: Dialog) => {

  return open && 
      (<div>
        <div className={`dialog-${color}`}>
          <div
            className="back back-size dialog"
          >
          </div>
          <div
            className="front front-size dialog"
          >
          </div>
          <div
            className="center center-size overflow-hidden flex flex-col justify-start dialog"
          >
            <h2>
              {title ?? "FILL ME IN!"}
            </h2>
            <div className="overflow-scroll pr-4">
              {children ?? 'nothing to see here...'}
            </div>
            {link && <Link className="self-end mt-6" href={`/${link}`}><ArrowRight color={color} /></Link>}
          </div>
        </div>
        <div className="w-screen h-screen z-40 backdrop-brightness-90 backdrop-blur-sm relative overflow-hidden" onClick={onDialogClick} /> 
        </div>
      )
}