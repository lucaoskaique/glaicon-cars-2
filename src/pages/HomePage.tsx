import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Hero, Marquee, About, ServicesList } from "../components";

export const HomePage = () => {
    const projects = [
        {
            title: "REVISÃO COMPLETA",
            category: "Motor & Transmissão",
            img: "https://picsum.photos/seed/engine/1200/800",
            slug: "motor",
        },
        {
            title: "SUSPENSÃO ESPORTIVA",
            category: "Performance",
            img: "https://picsum.photos/seed/suspension/1200/800",
            slug: "suspensao",
        },
        {
            title: "FREIOS DE ALTA PERFORMANCE",
            category: "Segurança",
            img: "https://picsum.photos/seed/brakes/1200/800",
            slug: "freios",
        },
        {
            title: "DIAGNÓSTICO AVANÇADO",
            category: "Injeção Eletrônica",
            img: "https://picsum.photos/seed/diagnostic/1200/800",
            slug: "diagnostico",
        },
    ];

    return (
        <>
            <Hero />
            <Marquee />

            {/* Services Section */}
            <section id="serviços" className="py-32 px-6 md:px-24">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <h2 className="text-6xl md:text-8xl font-display uppercase leading-none">
                        Nossos <br />{" "}
                        <span className="text-stroke">Serviços</span>
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
                            <Link to={`/servicos/${project.slug}`}>
                                <div className="relative aspect-video overflow-hidden bg-zinc-900 mb-6 border border-white/5">
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
                                        <h3 className="text-2xl font-display uppercase mb-1 group-hover:text-accent transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-zinc-500 text-xs uppercase tracking-widest">
                                            {project.category}
                                        </p>
                                    </div>
                                    <ArrowRight
                                        size={24}
                                        className="text-zinc-700 group-hover:text-accent transition-colors"
                                    />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            <About />
            <ServicesList />

            {/* CTA Section */}
            <section className="py-32 px-6 md:px-24 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-display uppercase mb-8 leading-tight">
                        Seu carro merece o{" "}
                        <span className="text-stroke">melhor cuidado.</span>
                    </h2>
                    <a
                        href="https://wa.me/5511999999999"
                        className="inline-block bg-white text-bg px-12 py-6 rounded-full font-display text-2xl uppercase hover:bg-accent hover:text-white transition-colors duration-300"
                    >
                        Falar com Especialista
                    </a>
                </motion.div>
            </section>
        </>
    );
};
