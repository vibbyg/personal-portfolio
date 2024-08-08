import { Dialog } from "./Dialog/Dialog";
import Image from "next/image";
import kaosiung from "./../../public/assets/kaosiung.jpg";
import monkey from "./../../public/assets/monkey.jpg";
import placedarts from "./../../public/assets/placedarts.jpg";
import sunrise from "./../../public/assets/sunrise.jpg";
import vietnam from "./../../public/assets/vietnam.jpg";
import yangmingshan from "./../../public/assets/yangmingshan.jpg";



interface PhotoDialog {
  title: string,
  link?: string,
  color: string,
  onDialogClick: any,
  open: Boolean
}

const previewImages = [vietnam, monkey, sunrise, yangmingshan, placedarts, kaosiung];

export const PhotoDialog = ({title, link, color, onDialogClick, open}: PhotoDialog) => {
  return (
    <Dialog title={title} link={link} color={color} onDialogClick={onDialogClick} open={open}>
      <div className="grid lg:grid-rows-2 lg:grid-cols-3 gap-5 place-items-center md:grid-cols-2">
        {
          previewImages.map((image, index) => {
            return (
              <Image key={index} src={image} width={image.width} height={image.height} alt={`${image.blurDataURL} lol`} 
              className={`max-w-52  border-4 border-solid border-stone-500 drop-shadow-lg`} />
            )
          })
        }
      </div>
    </Dialog>
  )
}