'use client'
import style from './page.module.scss';
import flowerpotbg from '../../../public/assets/flowerpotbg3.png';
import me from '../../../public/assets/arreity.jpg';
import portfolio from '../../../public/assets/fatmanhunterhunter.jpeg';
import blog from '../../../public/assets/nostalgicpo.jpeg';
import Image from 'next/image';
import { useState } from 'react';
import Seed from '../components/Seed/Seed';
import ArrowLeft from '../../../public/assets/ArrowLeft';
import classNames from "classnames";
import { AnimatePresence, motion } from 'framer-motion';


export default function Home() {
  
  const [seed, showSeed] = useState(false);

  const handleFlowerPotClick = () => {
    showSeed(!seed);
  }


  return (
    <main className={style.main}>
      <div className={style.circles}>
        <div className={style.circles__circle1} />
        <div className={style.circles__circle2} />
        <div className={style.circles__circle3} />
        </div>
      <AnimatePresence initial={false}>
      <motion.div className={style.flower_group}>
        { seed && 
        <motion.div className={style.flower_group__seeds} 
        key="seeds"
        initial={{ x: 0, opacity: 0, height: 0 }}
        animate={{ x: 0, opacity: 1, height: "auto" }}
        transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98]}}
        exit={{
          x: 0,
          opacity: 0,
          transition: { duration: 1 },
          height: 0
        }}
        >
          <motion.div className={style.flower_group__seed}>
            <Seed imageUrl={me} rotate={305} navigateTo='about'/>
            <h3 style={{ marginTop: '-0.5rem'}}>me</h3>
          </motion.div>
          <motion.div className={style.flower_group__seed}>
            <h3>portfolio</h3>
            <Seed imageUrl={portfolio} navigateTo='portfolio'/>
          </motion.div>
          <motion.div className={style.flower_group__seed}>
            <Seed imageUrl={blog} rotate={45} navigateTo='blog'/>
            <h3 style={{ marginTop: '-0.5rem'}}>blog</h3>
          </motion.div>
        </motion.div> }
      <motion.div className={style.mask_container} key="flowerpot" transition={{ type: "spring" }}>
        <Image src={flowerpotbg} className={classNames(style.mask_container__flowerpot, seed ? style.mask_container__animate : null)} alt="flowerpot" onClick={(e) => handleFlowerPotClick()}/>
      </motion.div>
      </motion.div>
      </AnimatePresence>

      <motion.div className={style.main__text} whileTap={{
        scale: 0.8,
        borderRadius: "100%"
      }}>
        <h1>hey, <br /> i'm vibhor!</h1>
        <h2>welcome to my garden 🪴</h2>
        <motion.div className={classNames(style.arrow_container, seed ? style.hidden : style.visible)}>
          <div className={style.arrow_container__arrow}>
            <ArrowLeft />
          </div>
          <h3>click on the flower pot to explore more</h3>
        </motion.div>
      </motion.div>
    </main>
  )
}
