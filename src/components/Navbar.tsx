import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToSection = (sectionId: string) => {
    if (!isHome) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference bg-black/20 backdrop-blur-sm">
      <Link to="/">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display tracking-tighter text-accent flex items-center gap-3 cursor-pointer"
        >
          <img 
            src="/img/glaicon-cars.jpeg" 
            alt="Glaicon Cars Logo" 
            className="w-10 h-10 object-contain"
          />
          GLAICON CARS
        </motion.div>
      </Link>
      
      <div className="hidden md:flex gap-12 text-sm font-medium uppercase tracking-widest text-white">
        {[
          { label: "Início", id: "início" },
          { label: "Serviços", id: "serviços" },
          { label: "Sobre", id: "sobre" },
          { label: "Contato", id: "contato" }
        ].map((item) => (
          <button 
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1"
          >
            {item.label}
          </button>
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
        {[
          { label: "Início", id: "início" },
          { label: "Serviços", id: "serviços" },
          { label: "Sobre", id: "sobre" },
          { label: "Contato", id: "contato" }
        ].map((item) => (
          <button 
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-5xl font-display uppercase hover:text-accent transition-colors"
          >
            {item.label}
          </button>
        ))}
      </motion.div>
    </nav>
  );
};
