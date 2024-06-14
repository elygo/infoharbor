import { useRef } from 'react';
import { useInView, motion, AnimatePresence } from 'framer-motion';

export function SectionFrameLeft({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <AnimatePresence>
        <motion.div
          variants={{
            hidden: {
              y: 0,
              opacity: 0
            },
            visible: {
              y: 0,
              opacity: isInView ? 1 : 0
            }
          }}
          animate={{ transform: isInView ? 0 : 'translateX(-100px)' }}
          transition={{
            duration: 4
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
