import { Instagram, Linkedin, Mail, Phone, MapPin, Clock, Twitter } from "lucide-react";

export const Contact = () => {
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
              src="/img/glaicon-cars.jpeg" 
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
