import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import './Card.css';
interface Card {
  title: string;
  subtitle?: string;
  timeline?: string;
  photo?: string | StaticImport;
  description?: string;
  link?: string;
  custom?: string;
  color?: string;

}

export const Card = ({ title, subtitle, timeline, photo, description, link, color}: Card) => {

  return (
    // <div className={`card-${color}`}>
    <div className={`card card-${color}`}>
      { photo && <Image src={photo} width={200} height={100} alt={title} className="lg:w-100 lg:h-25 sm:w-32 sm:h-auto self-center rounded-md" /> }
      <div className="flex flex-col md:pl-4 md:pr-8 justify-auto grow">
        <div className={`lg:text-3xl md:text-2xl text-lg `}>{title}</div>
        <div className="lg:text-2xl md:text-xl text-md">{subtitle}</div>
        <div className="lg:text-xl md:text-md italic text-xs text-background-right">{timeline}</div>
        <p className="lg:text-lg md:text-md text-sm overflow-hidden">{description}</p>
      </div>
      <div className={`lg:scale-150 duration-300 hover:cursor-pointer z-10 hover:scale-125 md:hover:animate-wobbling content-center self-center p-4 pl-8 pr-8 divide-none`}>
        <div className={`nexthole ${color} animate-breathing duration-300 ease-in-out`} />
      </div>
    </div>
    // </div>
  )
}