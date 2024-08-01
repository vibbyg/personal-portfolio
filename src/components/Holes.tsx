"use client"
import { useEffect, useState } from "react"
import { Hole } from "./Hole"
import { Card } from "./Card/Card";

const getRandomPosition = (maxWidth: number, maxHeight: number, sizeWidth: number, sizeHeight: number) => {
  const positionX = Math.floor(Math.random() * (maxWidth/1.75 - sizeWidth) * 100 / maxWidth);
  const positionY = Math.floor(Math.random() * (maxHeight * 2/3 - sizeHeight) * 100 / maxHeight);

  return {positionX, positionY}
}

export const Holes = () => {  
  const [position, setPosition] = useState<any>([]);
  const [open, setOpen] = useState<any>([{key: 'about', bool: false, color: 'green'}, {key: 'me', bool: false, color: 'blue'}, {key: 'who', bool: false, color: 'purple'}]);

  useEffect(() => {
    const screenWidth = window?.screen.width;
    const screenHeight = window?.screen.height;
    console.log(screenWidth, screenHeight)
    const holePos = getRandomPosition(screenWidth, screenHeight, 87, 13); 
    const hole2Pos = getRandomPosition(screenWidth, screenHeight, 87, 13); 
    const hole3Pos = getRandomPosition(screenWidth, screenHeight, 87, 13); 
    console.log(holePos, hole2Pos)
    setPosition(position.concat({pos: holePos, card: 'about'}, {pos: hole2Pos, card: 'me'}, {pos: hole3Pos, card: 'who'}))
  }, [])

  return (
    <div>
      {
          position.map((component: any, index: number) => {
            console.log('pos?', component)
            return (
            <div key={index}>
              <Hole
                offsetLeft={component.pos.positionX}
                offsetTop={component.pos.positionY}
                onHoleClick={() => {
                  const correct = open.find((val: any) => val.key == component.card)
                  const newOpen = [...open, {key: component.card, color: correct.color, bool: !correct.bool }]
                  setOpen(newOpen)
                }}
                color={open[index].color}
              />
            </div>
          )})
        }
        {
          open.map((elem: any, index: number) => {
            return (
              <Card key={index} open={elem.bool} color={elem.color} title={"who am i?"} onCardClick={() => {
                console.log('elem', elem)
                const newOpen = open.map((val: any) => val.key === elem.key ? {key: elem.key, color: elem.color, bool: !elem.bool} : val)
                setOpen(newOpen)
              }} />
            )
          })
        }
    </div>
  )
}