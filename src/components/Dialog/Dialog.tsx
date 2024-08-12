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
            className="back back-size dialog"
          >
          </div>
          <div
            className="front front-size dialog"
          >
          </div>
          <div
            className="center center-size overflow-hidden flex flex-col justify-between dialog"
          >
            <h2>
              {title ?? "FILL ME IN!"}
            </h2>
            <div className="overflow-scroll pr-4">
              {children ?? 'nothing to see here...'}
            </div>
            {link && <h3 className="self-end -mb-2 mt-2"><ArrowRight color={color} /></h3>}
          </div>
        </div>
        <div className="w-screen h-screen z-40 backdrop-brightness-90 backdrop-blur-sm relative overflow-hidden" onClick={onDialogClick} /> 
        </div>
      )
}