'use client'
import style from './page.module.scss';
import flowerpotbg from '../../public/assets/flowerpotbg.png';
import me from '../../public/assets/me.jpg';
import portfolio from '../../public/assets/portfolio.jpg';
import blog from '../../public/assets/smolhead.jpg';
import Image from 'next/image';
import { useState } from 'react';
import Seed from './components/Seed';
import ArrowLeft from '../../public/assets/ArrowLeft';
import classNames from "classnames";


export default function Home() {
  
  const [seed, showSeed] = useState(false);

  const handleFlowerPotClick = () => {
    showSeed(!seed);
    
  }
  const seedProps = {
    imageUrl: flowerpotbg
  }


  return (
    <main className={style.main}>
      <div className={style.flower_group}>
        { seed ? 
        <div className={style.flower_group__seeds}>
          <Seed imageUrl={me} rotate={305} />
          <Seed imageUrl={portfolio} bottomPadding={5}/>
          <Seed imageUrl={blog} rotate={45} />
        </div> 
          : null }
      <div className={style.mask_container}>
        <Image src={flowerpotbg} className={classNames(style.mask_container__flowerpot, seed ? style.mask_container__animate : null)} alt="flowerpot" onClick={(e) => handleFlowerPotClick()}/>
      </div>
      </div>

      <div className={style.main__text}>
        <h1>hey, <br /> i'm vibhor!</h1>
        <h2>welcome to my garden 🪴</h2>
        <div className={style.arrow_container} style={seed ? {visibility: 'hidden'} : {visibility: 'visible'}}>
          <div className={style.arrow_container__arrow}>
            <ArrowLeft />
          </div>
          <h3>click on the flower pot to explore more</h3>
        </div>
      </div>
    </main>
  )
}
