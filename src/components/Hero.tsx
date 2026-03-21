import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const rotate = useTransform(scrollY, [0, 500], [0, 15]);

  return (
    <section id="início" className="relative h-screen flex flex-col justify-center items-center px-6 md:px-24 overflow-hidden text-center" ref={containerRef}>
      <motion.div 
        style={{ y: y1, rotate }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center relative">
            <img 
              src="/img/glaicon-cars.jpeg" 
              alt="Glaicon Cars Logo" 
              className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(225,29,72,0.4)]"
            />
          </div>
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-accent" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-accent" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[12vw] md:text-[10vw] font-display leading-[0.8] uppercase tracking-tighter text-white"
        >
          GLAICON <br />
          <span className="text-accent">CARS</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-zinc-500 uppercase tracking-[0.5em] text-xs md:text-sm font-bold"
        >
          Mecânica • Performance • Estilo
        </motion.p>
      </motion.div>

      {/* Industrial Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-accent" />
      </div>
    </section>
  );
};
