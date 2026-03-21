import { motion } from "motion/react";
import { Settings, Check, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const MotorPage = () => {
  const features = [
    "Retífica completa de motores",
    "Troca de correias e correntes",
    "Revisão de válvulas e pistões",
    "Ajuste de torque e performance",
    "Limpeza de bicos injetores",
    "Substituição de juntas e retentores"
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 md:px-24 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl"
        >
          <Link to="/" className="text-sm text-zinc-500 hover:text-accent transition-colors mb-6 inline-block">
            ← Voltar para Home
          </Link>
          <div className="flex items-center gap-4 mb-8">
            <Settings size={48} className="text-accent" />
            <h1 className="text-6xl md:text-8xl font-display uppercase leading-none">
              MOTOR
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl">
            Força bruta e precisão cirúrgica. Retífica e ajustes de alta performance para o coração do seu carro.
          </p>
        </motion.div>
      </section>

      {/* Image Banner */}
      <section className="mb-24 px-6 md:px-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative aspect-21/9 overflow-hidden border border-white/10"
        >
          <img 
            src="https://picsum.photos/seed/engine/1920/800" 
            alt="Serviço de Motor"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
        </motion.div>
      </section>

      {/* Content Grid */}
      <section className="px-6 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-4xl font-display uppercase mb-6 text-accent">O QUE FAZEMOS</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Nossos especialistas em motores possuem mais de 15 anos de experiência trabalhando com todos os tipos de motores, 
            desde aspirados até turboalimentados de alta performance.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Utilizamos equipamentos de última geração para diagnóstico preciso e reparo profissional, 
            garantindo que seu motor opere no máximo de sua capacidade.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Cada serviço é realizado com atenção aos detalhes, porque sabemos que o motor é o coração do seu veículo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-zinc-900/50 border border-white/10 p-8"
        >
          <h3 className="text-2xl font-display uppercase mb-8 flex items-center gap-3">
            <Settings className="text-accent" /> SERVIÇOS INCLUÍDOS
          </h3>
          <ul className="space-y-4">
            {features.map((feature, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-start gap-3 text-zinc-300"
              >
                <Check size={20} className="text-accent shrink-0 mt-1" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-accent/10 border border-accent/30 p-12 text-center"
        >
          <h3 className="text-4xl md:text-5xl font-display uppercase mb-6">
            PRONTO PARA TURBINAR SEU MOTOR?
          </h3>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Entre em contato e agende uma avaliação gratuita com nossos especialistas.
          </p>
          <a 
            href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o serviço de Motor"
            className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-full font-display text-xl uppercase hover:bg-white hover:text-accent transition-colors duration-300"
          >
            <Phone size={24} /> Falar com Especialista
          </a>
        </motion.div>
      </section>
    </div>
  );
};
