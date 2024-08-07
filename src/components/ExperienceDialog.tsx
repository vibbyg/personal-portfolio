import { Dialog } from "./Dialog/Dialog";
import Image from "next/image";
import { experienceData } from "@/data/experience";
import { Card } from "./Card/Card";



interface ExperienceDialog {
  title: string,
  link?: string,
  color: string,
  onDialogClick: any,
  open: Boolean
}


export const ExperienceDialog = ({title, link, color, onDialogClick, open}: ExperienceDialog) => {
  return (
    <Dialog title={title} link={link} color={color} onDialogClick={onDialogClick} open={open}>
      <div className="flex flex-col content-center m-2 gap-4">
        {
          experienceData.map((experience, index) => {
            console.log(experience.logo);
            return (
              <Card 
              key={index} 
              title={experience.company} 
              subtitle={experience.position} 
              timeline={`${experience.start} - ${experience.end}`}
              photo={experience.logo}
              background={`bg-purple-light hover:bg-purple `}
              color={color}
              />
          )})
        }
      </div>
    </Dialog>
  )
}