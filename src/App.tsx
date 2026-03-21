/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Instagram, Linkedin, Mail, Menu, Twitter, X, Wrench, Settings, Gauge, Car, Phone, MapPin, Clock } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-display tracking-tighter text-accent flex items-center gap-3"
      >
        <img 
          src="https://storage.googleapis.com/static.mira.network/ai-studio-build/d6907409-e160-466d-9269-8084a305943a.png" 
          alt="Glaicon Cars Logo" 
          className="w-10 h-10 object-contain"
          referrerPolicy="no-referrer"
        />
        GLAICON CARS
      </motion.div>
      
      <div className="hidden md:flex gap-12 text-sm font-medium uppercase tracking-widest text-white">
        {["Início", "Serviços", "Sobre", "Contato"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1">
            {item}
          </a>
        ))}
      </div>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 bg-bg z-40 flex flex-col items-center justify-center gap-8 md:hidden"
      >
        {["Início", "Serviços", "Sobre", "Contato"].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            onClick={() => setIsOpen(false)}
            className="text-5xl font-display uppercase hover:text-accent transition-colors"
          >
            {item}
          </a>
        ))}
      </motion.div>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const rotate = useTransform(scrollY, [0, 500], [0, 15]);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center px-6 md:px-24 overflow-hidden text-center" ref={containerRef}>
      <motion.div 
        style={{ y: y1, rotate }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Actual Skull/Piston Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center relative">
            <img 
              src="https://storage.googleapis.com/static.mira.network/ai-studio-build/d6907409-e160-466d-9269-8084a305943a.png" 
              alt="Glaicon Cars Logo" 
              className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(225,29,72,0.4)]"
              referrerPolicy="no-referrer"
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

const Marquee = () => {
  return (
    <div className="py-12 border-y border-white/10 overflow-hidden bg-accent text-white">
      <div className="marquee-track flex gap-12 whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-4xl md:text-6xl font-display uppercase tracking-tighter italic">
            BAD TO THE BONE • GEARHEAD CULTURE • CUSTOM REPAIRS • HIGH PERFORMANCE • 
          </span>
        ))}
      </div>
    </div>
  );
};

const Work = () => {
  const projects = [
    { title: "REVISÃO COMPLETA", category: "Motor & Transmissão", img: "https://picsum.photos/seed/engine/1200/800" },
    { title: "SUSPENSÃO ESPORTIVA", category: "Performance", img: "https://picsum.photos/seed/suspension/1200/800" },
    { title: "FREIOS DE ALTA PERFORMANCE", category: "Segurança", img: "https://picsum.photos/seed/brakes/1200/800" },
    { title: "DIAGNÓSTICO AVANÇADO", category: "Injeção Eletrônica", img: "https://picsum.photos/seed/diagnostic/1200/800" },
  ];

  return (
    <section id="serviços" className="py-32 px-6 md:px-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <h2 className="text-6xl md:text-8xl font-display uppercase leading-none">
          Nossos <br /> <span className="text-stroke">Serviços</span>
        </h2>
        <div className="h-px w-full md:w-1/3 bg-white/10 mb-4 hidden md:block" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer industrial-border p-4 bg-zinc-900/30"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900 mb-6 border border-white/5">
              <img 
                src={project.img} 
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-display uppercase mb-1 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">{project.category}</p>
              </div>
              <ArrowRight size={24} className="text-zinc-700 group-hover:text-accent transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
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
            src="https://storage.googleapis.com/static.mira.network/ai-studio-build/d6907409-e160-466d-9269-8084a305943a.png" 
            alt="Glaicon Cars Logo"
            referrerPolicy="no-referrer"
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

const ServicesList = () => {
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

const Contact = () => {
  return (
    <footer id="contato" className="pt-32 pb-12 px-6 md:px-24 bg-zinc-950 text-white border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
        <div className="max-w-2xl">
          <h2 className="text-6xl md:text-[8vw] font-display leading-[0.8] uppercase tracking-tighter mb-12">
            TRAGA SUA <br /> <span className="text-accent">MÁQUINA.</span>
          </h2>
          <div className="flex flex-col gap-6">
            <a 
              href="https://wa.me/5511999999999" 
              className="text-3xl md:text-5xl font-display uppercase text-white hover:text-accent transition-colors flex items-center gap-4"
            >
              <Phone size={40} className="text-accent" /> (11) 99999-9999
            </a>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-4">
              <Mail size={20} /> contato@glaiconcars.com.br
            </p>
          </div>
        </div>
        
        <div className="flex flex-col gap-12 text-sm font-bold uppercase tracking-widest">
          <div className="flex flex-col items-end gap-6">
            <img 
              src="https://storage.googleapis.com/static.mira.network/ai-studio-build/d6907409-e160-466d-9269-8084a305943a.png" 
              alt="Glaicon Cars" 
              className="w-24 h-24 object-contain opacity-50"
            />
            <div className="flex gap-8">
              <Instagram className="cursor-pointer hover:text-accent transition-colors" />
              <Twitter className="cursor-pointer hover:text-accent transition-colors" />
              <Linkedin className="cursor-pointer hover:text-accent transition-colors" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4 border-l border-accent pl-4">
              <MapPin size={20} className="text-accent shrink-0" />
              <div>
                <p className="text-white">Rua das Peças, 123</p>
                <p className="text-zinc-500">São Paulo, SP</p>
              </div>
            </div>
            <div className="flex items-start gap-4 border-l border-accent pl-4">
              <Clock size={20} className="text-accent shrink-0" />
              <div>
                <p className="text-white">Seg - Sex: 08:00 - 18:00</p>
                <p className="text-zinc-500 italic">Sáb: 08:00 - 12:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-600">
        <p>© 2026 GLAICON CARS. BAD TO THE BONE SERVICE.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-bg z-[100] flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="w-48 h-48"
        >
          <img 
            src="https://storage.googleapis.com/static.mira.network/ai-studio-build/d6907409-e160-466d-9269-8084a305943a.png" 
            alt="Loading..." 
            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(225,29,72,0.5)]"
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-bg min-h-screen selection:bg-accent selection:text-bg">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <ServicesList />
        <section className="py-32 px-6 md:px-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-display uppercase mb-8 leading-tight">
              Seu carro merece o <span className="text-stroke">melhor cuidado.</span>
            </h2>
            <button className="bg-white text-bg px-12 py-6 rounded-full font-display text-2xl uppercase hover:bg-accent transition-colors duration-300">
              Falar com Especialista
            </button>
          </motion.div>
        </section>
      </main>
      <Contact />
    </div>
  );
}
