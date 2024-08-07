import { ReactNode } from "react"
import './Dialog.css'
import { ArrowRight } from "../ArrowRight"
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
            className="back back-size"
          >
          </div>
          <div
            className="front front-size"
          >
          </div>
          <div
            className="center center-size fixed overflow-hidden flex flex-col justify-between"
          >
            <h2>
              {title ?? "FILL ME IN!"}
            </h2>
            <div className="overflow-scroll pr-4">
              {children ?? 'nothing to see here...'}
            </div>
            <h3 className="self-end -mb-2 mt-2"><ArrowRight color={color} /></h3>
          </div>
        </div>
        <div className="w-screen h-screen z-40 backdrop-brightness-90 backdrop-blur-sm relative" onClick={onDialogClick} />
        </div>
      )
}