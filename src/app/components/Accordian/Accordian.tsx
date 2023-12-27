import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import style from './accordian.module.scss';

interface IAccordian {
    expanded: boolean;
    
}

function Accordian ({
    children,
  }: {
    children?: React.ReactNode
  }) {

    const [expanded, setExpanded] = useState(false);
    
    return (
    <div className={style.container}>
      <motion.header
        initial={false}
        animate={{ backgroundColor: expanded ? "#FF0088" : "#DEB831" }}
        onClick={() => setExpanded(!expanded)}
        className={style.header}
      >
        Testing
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
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
    )

}

export default Accordian;