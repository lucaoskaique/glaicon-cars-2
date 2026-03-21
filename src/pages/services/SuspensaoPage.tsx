import { motion } from "motion/react";
import { Wrench, Check, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const SuspensaoPage = () => {
  const features = [
    "Alignamento e balanceamento de precisão",
    "Troca de amortecedores esportivos",
    "Ajuste de altura e geometria",
    "Substituição de buchas e pivôs",
    "Instalação de kits de suspensão",
    "Reforço estrutural para pista"
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
            <Wrench size={48} className="text-accent" />
            <h1 className="text-6xl md:text-8xl font-display uppercase leading-none">
              SUSPENSÃO
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl">
            Domine as curvas. Ajustes de pista e conforto para o dia a dia com performance garantida.
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
            src="https://picsum.photos/seed/suspension/1920/800" 
            alt="Serviço de Suspensão"
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
          <h2 className="text-4xl font-display uppercase mb-6 text-accent">ESPECIALISTAS EM SETUP</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Uma suspensão bem ajustada é a diferença entre um carro comum e uma máquina de performance. 
            Nossa equipe domina tanto setups esportivos quanto configurações de conforto.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Trabalhamos com as melhores marcas do mercado e utilizamos equipamentos de alinhamento computadorizado 
            de última geração para garantir precisão milimétrica.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Seja para uso urbano, viagens longas ou track days, temos a solução perfeita para seu estilo de pilotagem.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-zinc-900/50 border border-white/10 p-8"
        >
          <h3 className="text-2xl font-display uppercase mb-8 flex items-center gap-3">
            <Wrench className="text-accent" /> SERVIÇOS INCLUÍDOS
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
            TRANSFORME SEU CARRO EM UMA MÁQUINA
          </h3>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Agende uma avaliação e descubra como melhorar a dirigibilidade do seu veículo.
          </p>
          <a 
            href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o serviço de Suspensão"
            className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-full font-display text-xl uppercase hover:bg-white hover:text-accent transition-colors duration-300"
          >
            <Phone size={24} /> Falar com Especialista
          </a>
        </motion.div>
      </section>
    </div>
  );
};
