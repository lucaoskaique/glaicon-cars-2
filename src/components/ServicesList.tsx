import { motion } from "motion/react";
import { Settings, Wrench, Gauge, Car } from "lucide-react";

export const ServicesList = () => {
  const services = [
    { icon: <Settings size={32} />, title: "Motor", desc: "Força bruta e precisão cirúrgica. Retífica e ajustes de alta performance." },
    { icon: <Wrench size={32} />, title: "Suspensão", desc: "Domine as curvas. Ajustes de pista e conforto para o dia a dia." },
    { icon: <Gauge size={32} />, title: "Diagnóstico", desc: "Tecnologia de ponta para ler a alma da sua máquina." },
    { icon: <Car size={32} />, title: "Freios", desc: "Poder de parada absoluto. Segurança sem concessões." },
  ];

  return (
    <section id="services" className="py-32 bg-black px-6 md:px-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors group"
          >
            <span className="text-accent mb-6 block group-hover:scale-110 transition-transform">{service.icon}</span>
            <h3 className="text-2xl font-display uppercase mb-4 text-white">{service.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-medium">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
