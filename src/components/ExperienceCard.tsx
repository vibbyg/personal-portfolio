import { Card } from "./Card/Card";
import Image from "next/image";
import { experienceData } from "@/data/experience";



interface ExperienceCard {
  title: string,
  link?: string,
  color: string,
  onCardClick: any,
  open: Boolean
}


export const ExperienceCard = ({title, link, color, onCardClick, open}: ExperienceCard) => {
  return (
    <Card title={title} link={link} color={color} onCardClick={onCardClick} open={open}>
      <div className="grid lg:grid-rows-2 lg:grid-cols-3 gap-5 place-items-center md:grid-cols-2">
        {
          experienceData.map((experience, index) => {
            console.log(experience.logo);
            return (
              <Image key={index} src={experience.logo} width={100} height={50} alt={`${experience.company}`} 
              className={`max-w-52  border-4 border-solid border-${color}`} />
            )
          })
        }
      </div>
    </Card>
  )
}