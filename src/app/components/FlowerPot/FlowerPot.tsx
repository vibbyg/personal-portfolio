import flowerpotbg from '../../../../public/assets/flowerpotbg.png';
import Image from 'next/image';
import classNames from 'classnames';
import style from './flowerpot.module.scss';

interface IFlowerPot {
    handleFlowerPotClick: () => {};
}

function FlowerPot() {
    return (
        <div className={style.mask_container}>
            <Image src={flowerpotbg} className={classNames(style.mask_container__flowerpot)} alt="flowerpot" onClick={() => {}}/>
        </div>
    )
};

export default FlowerPot;

