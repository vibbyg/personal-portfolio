import { Card } from "./Card/Card";
import Image from "next/image";
import kaosiung from "./../../public/assets/kaosiung.jpg";
import monkey from "./../../public/assets/monkey.jpg";
import placedarts from "./../../public/assets/placedarts.jpg";
import sunrise from "./../../public/assets/sunrise.jpg";
import vietnam from "./../../public/assets/vietnam.jpg";
import yangmingshan from "./../../public/assets/yangmingshan.jpg";



interface PhotoCard {
  title: string,
  link?: string,
  color: string,
  onCardClick: any,
  open: Boolean
}

const previewImages = [vietnam, monkey, sunrise, yangmingshan, placedarts, kaosiung];

export const PhotoCard = ({title, link, color, onCardClick, open}: PhotoCard) => {
  return (
    <Card title={title} link={link} color={color} onCardClick={onCardClick} open={open}>
      <div className="grid lg:grid-rows-2 lg:grid-cols-3 gap-5 place-items-center md:grid-cols-2">
        {
          previewImages.map((image, index) => {
            return (
              <Image key={index} src={image} width={image.width} height={image.height} alt={`${image.blurDataURL} lol`} 
              className={`max-w-52  border-4 border-solid border-${color}`} />
            )
          })
        }
      </div>
    </Card>
  )
}