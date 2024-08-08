import { Dialog } from "./Dialog/Dialog";
import Image from "next/image";
import { experienceData } from "@/data/experience";
import { Card } from "./Card/Card";
import { projectsData } from "@/data/projects";



interface ProjectsDialog {
  title: string,
  link?: string,
  color: string,
  onDialogClick: any,
  open: Boolean
}


export const ProjectsDialog = ({title, link, color, onDialogClick, open}: ProjectsDialog) => {
  return (
    <Dialog title={title} link={link} color={color} onDialogClick={onDialogClick} open={open}>
      <div className="flex flex-col content-center m-2 gap-4">
        {
          projectsData.map((project, index) => {
            console.log(project.logo);
            return (
              <Card 
              key={index} 
              title={project.title.toLowerCase()} 
              timeline={`${project.start.toLowerCase()}`}
              description={project.description.toLowerCase()}
              photo={project.logo}
              custom={`bg-background-left hover:bg-${color}`}
              color={color}
              />
          )})
        }
      </div>
    </Dialog>
  )
}