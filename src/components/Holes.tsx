"use client"
import { useEffect, useState } from "react"
import { Hole } from "./Hole/Hole"
import { AboutDialog } from "./AboutDialog";
import { PhotoDialog } from "./PhotoDialog";
import { previewData } from "@/data/holes";
import { ExperienceDialog } from "./ExperienceDialog";
import { ProjectsDialog } from "./ProjectsDialog";

const getRandomPosition = (maxWidth: number, maxHeight: number, sizeWidth: number, sizeHeight: number) => {
  const positionX = Math.floor(Math.random() * (maxWidth / 1.15 - sizeWidth) * 100 / maxWidth);
  const positionY = Math.floor(Math.random() * (maxHeight * 2/3 - sizeHeight) * 100 / maxHeight);

  return {positionX, positionY}
}

type PreviewData = {
  id: number;
  title: string;
  link: string;
  color: string;
  pos: {};
}

export const Holes = () => {  
  const [holes, setHoles] = useState<PreviewData[]>([]);
  const [open, setOpen] = useState<PreviewData>({} as PreviewData);

  useEffect(() => {
    const screenWidth = window?.screen.width;
    const screenHeight = window?.screen.height;
    console.log(screenWidth, screenHeight)
    const dataWithLocation = previewData.map(data => ({...data, 'pos': getRandomPosition(screenWidth, screenHeight, 87, 13), 'open': false}));
    setHoles(dataWithLocation)
  }, [])

  return (
    <div>
      { holes && 
          holes.map((hole: any, index: number) => {
            return (
            <div key={index}>
              <Hole
                offsetLeft={hole.pos.positionX}
                offsetTop={hole.pos.positionY}
                onHoleClick={() => {
                  console.log(hole)
                  setOpen(hole)
                }}
                color={hole.color}
              />
            </div>
          )})
        }
        {open &&
            open.link === "about" ?
            (<AboutDialog key={open.id} open={!!open} link={open.link} color={open.color} title={open.title} onDialogClick={() => {
                setOpen({} as PreviewData)
              }} />
            )
            : open.link === "photography" ?
            (<PhotoDialog key={open.id} open={!!open} link={open.link} color={open.color} title={open.title} onDialogClick={() => {
                setOpen({} as PreviewData)
            }} 
            />
          )
          : open.link == "experience" ?
          (<ExperienceDialog key={open.id} open={!!open} link={open.link} color={open.color} title={open.title} onDialogClick={() => {
            setOpen({} as PreviewData)
          }} 
            />
          )
          : open.link == "projects" ?
          (<ProjectsDialog key={open.id} open={!!open} link={open.link} color={open.color} title={open.title} onDialogClick={() => {
            setOpen({} as PreviewData)
          }} 
            />
          )
          : null
        }
    </div>
  )
}