import flowerpotbg from '../../../../public/assets/flowerpotbg.png';
import Image from 'next/image';
import classNames from 'classnames';
import style from './flowerpot.module.scss';
import Link from 'next/link';

interface IFlowerPot {
    handleFlowerPotClick?: () => {};
    width: number;
    height: number;
}

function FlowerPot(props: IFlowerPot) {
    return (
        <div className={style.mask_container}>
            <Link href={"/"}>
                <svg className={classNames(style.mask_container__flowerpot)} width={props.width} height={props.height}/>
            </Link>
        </div>
    )
};

export default FlowerPot;

