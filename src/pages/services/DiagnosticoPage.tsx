import { motion } from "motion/react";
import { Gauge, Check, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const DiagnosticoPage = () => {
  const features = [
    "Scanner de última geração",
    "Análise de injeção eletrônica",
    "Diagnóstico de falhas elétricas",
    "Leitura de códigos de erro",
    "Teste de sensores e atuadores",
    "Relatório técnico completo"
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
            <Gauge size={48} className="text-accent" />
            <h1 className="text-6xl md:text-8xl font-display uppercase leading-none">
              DIAGNÓSTICO
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl">
            Tecnologia de ponta para ler a alma da sua máquina e identificar problemas com precisão cirúrgica.
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
            src="https://picsum.photos/seed/diagnostic/1920/800" 
            alt="Serviço de Diagnóstico"
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
          <h2 className="text-4xl font-display uppercase mb-6 text-accent">TECNOLOGIA AVANÇADA</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Os carros modernos são verdadeiros computadores sobre rodas. Nossa oficina conta com scanners 
            profissionais de última geração capazes de diagnosticar qualquer problema.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Fazemos a leitura completa de todos os módulos eletrônicos do veículo, identificando falhas 
            invisíveis e fornecendo soluções precisas baseadas em dados reais.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Economize tempo e dinheiro com um diagnóstico preciso antes de qualquer intervenção. 
            Nossos relatórios técnicos detalham exatamente o que precisa ser feito.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-zinc-900/50 border border-white/10 p-8"
        >
          <h3 className="text-2xl font-display uppercase mb-8 flex items-center gap-3">
            <Gauge className="text-accent" /> SERVIÇOS INCLUÍDOS
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
            IDENTIFIQUE O PROBLEMA AGORA
          </h3>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Agende um diagnóstico completo e descubra exatamente o que seu carro precisa.
          </p>
          <a 
            href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o serviço de Diagnóstico"
            className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-full font-display text-xl uppercase hover:bg-white hover:text-accent transition-colors duration-300"
          >
            <Phone size={24} /> Falar com Especialista
          </a>
        </motion.div>
      </section>
    </div>
  );
};
