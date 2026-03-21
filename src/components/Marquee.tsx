export const Marquee = () => {
  return (
    <div className="py-12 border-y border-white/10 overflow-hidden bg-accent text-white">
      <div className="marquee-track flex gap-12 whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-4xl md:text-6xl font-display uppercase tracking-tighter italic">
            BAD TO THE BONE • GEARHEAD CULTURE • REPAROS PERSONALIZADOS • ALTA PERFORMANCE • 
          </span>
        ))}
      </div>
    </div>
  );
};
