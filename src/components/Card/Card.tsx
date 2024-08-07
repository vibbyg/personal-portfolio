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
  background?: string;
  color?: string;

}

export const Card = ({ title, subtitle, timeline, photo, description, link, background, color}: Card) => {

  return (
    <div className={`flex flex-col md:flex-row border border-solid 
    gap-3 p-8 md:divide-x rounded-lg ${background} drop-shadow-xl hover:cursor-pointer duration-300 hover:text-${color ?? 'purple'}-light`}>
      { photo && <Image src={photo} width={200} height={40} alt={title} className="lg:w-100 lg:h-25 sm:w-32 sm:h-auto self-center" /> }
      <div className="flex flex-col md:pl-4 md:pr-8 justify-auto grow">
        <div className={`lg:text-3xl md:text-2xl text-lg `}>{title}</div>
        <div className="lg:text-2xl md:text-xl text-md">{subtitle}</div>
        <div className="lg:text-xl md:text-md italic text-xs text-background-right">{timeline}</div>
        <p className="lg:text-lg md:text-md text-sm">{description}</p>
      </div>
      <div className={`lg:scale-150 duration-300 hover:cursor-pointer md:hover:animate-wobbling hover:scale-125 z-10 content-center self-center p-4 pl-8 pr-8 divide-none`}>
        <div className="nexthole animate-breathing duration-300 ease-in-out" />
      </div>
    </div>
  )
}