import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiSass,
    SiJavascript,
    SiPhp,
    SiMysql,
    SiGit,
    SiGithub,
} from "react-icons/si";
import { VscTools } from "react-icons/vsc";
import { SiVite } from "react-icons/si";

interface TechSkill {
    name: string;
    icon: React.ReactNode;
}

const skills: TechSkill[] = [
    { name: "React", icon: <SiReact /> },
    { name: "NextJS", icon: <SiNextdotjs /> },
    { name: "Typescript", icon: <SiTypescript /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "SCSS", icon: <SiSass /> },
    { name: "Javascript", icon: <SiJavascript /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Workbench", icon: <VscTools /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Github", icon: <SiGithub /> },
];

export function Skills() {
    return (
        <section id="skills" className="py-20 w-full container mx-auto">
            <div className='relative py-12 sm:py-16 md:py-24 overflow-hidden px-4'>

                <div className="text-center mb-12 sm:mb-14 md:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-main font-bold uppercase text-white container mx-auto relative z-10 reveal">
                        Habilidades
                    </h1>
                    <div className="flex justify-center mt-3 sm:mt-4">
                        <div className="h-1 w-16 sm:w-20 bg-[var(--text-main)] rounded-full" />
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 relative z-10">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="reveal group relative"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                            }}
                        >
                            <div className="skill-card-shimmer relative h-24 sm:h-28 md:h-32 flex items-center justify-center rounded-lg border-2 border-[var(--text-main)] bg-black/20 backdrop-blur-sm transition-all duration-500 hover:bg-[var(--text-main)]/5 hover:border-[var(--text-main)] hover:shadow-[0_0_20px_rgba(255,214,0,0.4)] cursor-pointer overflow-hidden">
                                {/* Animated background on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--text-main)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="flex flex-col items-center gap-2 sm:gap-3 relative z-10 group-hover:scale-110 transition-transform duration-500">
                                    <div className="text-2xl sm:text-3xl md:text-4xl text-[var(--text-main)] transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(255,214,0,0.6)]">
                                        {skill.icon}
                                    </div>
                                    <span className="text-xs sm:text-sm md:text-base font-body font-semibold text-white/70 text-center transition-all duration-500 group-hover:text-[var(--text-main)]">
                                        {skill.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}