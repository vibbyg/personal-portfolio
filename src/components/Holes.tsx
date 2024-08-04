"use client"
import { useEffect, useState } from "react"
import { Hole } from "./Hole/Hole"
import { AboutCard } from "./AboutCard";
import { PhotoCard } from "./PhotoCard";
import { previewData } from "@/data/holes";
import { ExperienceCard } from "./ExperienceCard";

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
      {
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
            (<AboutCard key={open.id} open={!!open} color={open.color} title={open.title} onCardClick={() => {
                setOpen({} as PreviewData)
              }} />
            )
            : open.link === "photography" ?
            (<PhotoCard key={open.id} open={!!open} color={open.color} title={open.title} onCardClick={() => {
                setOpen({} as PreviewData)
            }} 
            />
          )
          : open.link == "experience" ?
          (<ExperienceCard key={open.id} open={!!open} color={open.color} title={open.title} onCardClick={() => {
            setOpen({} as PreviewData)
          }} 
            />
          )
          : null
        }
    </div>
  )
}