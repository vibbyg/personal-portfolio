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
              title={experience.company.toLowerCase()} 
              subtitle={experience.position.toLowerCase()} 
              timeline={`${experience.start.toLowerCase()} - ${experience.end.toLowerCase()}`}
              photo={experience.logo}
              color={color}
              />
          )})
        }
      </div>
    </Dialog>
  )
}