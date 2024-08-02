import { Card } from "./Card/Card";
import Image from "next/image";
import me from "./../../public/assets/me.jpg";

interface AboutCard {
  title: string,
  link?: string,
  color: string,
  onCardClick: any,
  open: Boolean
}

export const AboutCard = ({title, link, color, onCardClick, open}: AboutCard) => {
  return (
    <Card title={title} link={link} color={color} onCardClick={onCardClick} open={open}>
      <div className="flex md:flex-row flex-col items-center">
        <div className="flex-col space-y-2">
          <h3 className="md:text-xl lg:text-2xl">hey hey! my name is Vibhor and I’m a 3rd year Computer Science student at the University of Waterloo.</h3>
          <h3 className="md:text-xl lg:text-2xl">I enjoy <span className={`text-${color} italic`}>creating</span> things - creating <b>videos</b>, creating projects, and most importantly, creating experiences.</h3>
          <h3 className="md:text-xl lg:text-2xl">Come and take a peek into my mind. If you like what you see, you can find more <a href="https://www.instagram.com/vibbyridge" target="_blank" className="italic hover:underline cursor-pointer text-blue">here</a>, <a href="https://github.com/vibbyg" target="_blank" className="italic hover:underline cursor-pointer text-green">here</a>, and <a href="https://www.youtube.com/channel/UCaokqBc5dglz6RnbFvmxclA" target="_blank" className="italic hover:underline cursor-pointer text-purple">here</a>.</h3>

        </div>
        <Image src={me} width={me.width} height={me.width} alt="me lol" className={"max-w-52 ml-2 rounded-lg border-4 border-solid border-blue"}/>
      </div>
    </Card>
  )
}