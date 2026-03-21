import { motion } from "motion/react";
import { Wrench } from "lucide-react";

export const About = () => {
  return (
    <section id="sobre" className="py-32 px-6 md:px-24 border-t border-white/5 bg-zinc-950">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-display uppercase mb-8 leading-none">
            LEGADO <br /> <span className="text-accent">GLAICON.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8 font-medium">
            Nascida da cultura "gearhead", a Glaicon Cars não é apenas uma oficina. É um santuário para quem vive e respira motores. Com mais de 15 anos de estrada, transformamos metal frio em máquinas de pura emoção.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="border-l-2 border-accent pl-6">
              <span className="text-4xl font-display block text-white">15+</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold">Anos de Estrada</span>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <span className="text-4xl font-display block text-white">5K+</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold">Motores Ajustados</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square bg-zinc-900/50 overflow-hidden border border-white/10 flex items-center justify-center p-12"
        >
          <img 
            src="/img/glaicon-cars.jpeg" 
            alt="Glaicon Cars Logo"
            className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-all duration-700 drop-shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <Wrench size={48} className="text-accent opacity-50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
