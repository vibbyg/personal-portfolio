import Image, { StaticImageData } from 'next/image';
import seed from './seed.module.scss';
import ReactCurvedText from 'react-curved-text';
import { useRouter } from 'next/navigation';

interface ISeed {
    imageUrl: StaticImageData,
    rotate?: number;
    bottomPadding?: number;
    navigateTo?: string;
}


function Seed(props: ISeed) {
    const router = useRouter();

    return (
        <div className={seed.mask_container} style={{ paddingBottom: `${props.bottomPadding}rem` ?? 0 }}>
            <Image src={props.imageUrl} className={seed.mask_seed} alt="flowerpot" 
            style={{transform: `rotate(${props.rotate ?? 0}deg)`, width: '200px', height: '200px', objectFit: 'cover' }} 
            onClick={() => {props.navigateTo ? router.push(`/${props.navigateTo}`) : null;}}/>
        </div>
    )

}

export default Seed;