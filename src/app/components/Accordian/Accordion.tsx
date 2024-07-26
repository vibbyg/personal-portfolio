import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import style from './accordion.module.scss';

function Accordian ({
    header,
    children,
  }: {
    header?: string,
    children?: React.ReactNode
  }) {

    const [expanded, setExpanded] = useState(false);
    
    return (
    <div className={style.container}>
      <motion.header
        initial={false}
        animate={{ backgroundColor: expanded ? "#493459" : "#DEB831", color: expanded ? "white" : "black" }}
        onClick={() => setExpanded(!expanded)}
        className={style.header}
      >
        <h4>{header}</h4>
    </motion.header>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className={style.section}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
    )

}

export default Accordian;