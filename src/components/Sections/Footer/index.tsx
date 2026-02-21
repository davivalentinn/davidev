import { useEffect } from "react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import logo from "../../../../public/logo.svg";


const navigationLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre mim", href: "#sobre" },
    { label: "Meus Projetos", href: "#projetos" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Fale comigo", href: "#contato" },
];

const socialLinks = [
    { label: "GitHub", icon: <SiGithub />, href: "https://github.com/davivalentinn" },
    { label: "LinkedIn", icon: <SiLinkedin />, href: "https://linkedin.com/in/davivalentinn" },
    { label: "Email", icon: <SiGmail />, href: "mailto:davivalentns@gmail.com" },
];

export function Footer() {
    // Log no console (como na imagem)
    useEffect(() => {
        console.log(
            "%cObrigado pela visita! 🚀 Curioso? Explore o código no meu GitHub!",
            "color: #FFD600; font-size: 16px; font-weight: bold; padding: 10px;"
        );
    }, []);

    return (
        <footer className="w-full bg-black border-t-2 border-[var(--text-main)]">
            {/* Conteúdo Principal */}
            <div className="container mx-auto py-16 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Lado Esquerdo - Logo e Descrição */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={logo} alt="Logo" className="h-20" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="text-[var(--text-main)] font-code text-base font-semibold">
                                ▸ Desenvolvedor Front-End
                            </p>
                            <p className="text-[var(--text-main)] font-code text-base font-semibold">
                                ▸ Transformando código em experiências
                            </p>
                        </div>

                        <div className="flex items-center gap-3 pt-4">
                            <div className="w-3 h-3 rounded-full bg-[var(--text-main)] animate-pulse" />
                            <span className="text-white font-body text-sm">
                                Status: <span className="text-[var(--text-main)] font-semibold">Disponível para projetos</span>
                            </span>
                        </div>
                    </div>

                    {/* Centro - Navegação */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-main font-bold text-white uppercase">Navegação</h3>
                        <nav className="space-y-3">
                            {navigationLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-white/70 hover:text-[var(--text-main)] transition-colors duration-300 font-code text-base block"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Lado Direito - Redes Sociais */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-main font-bold text-white uppercase">Conecte-se</h3>
                        <div className="flex flex-wrap gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 px-4 py-2 border-2 border-[var(--text-main)] text-white rounded-lg hover:bg-[var(--text-main)] hover:text-black transition-all duration-300"
                                >
                                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                                        {social.icon}
                                    </span>
                                    <span className="font-code text-sm font-semibold">{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divisor */}
                <div className="my-12 h-px bg-gradient-to-r from-transparent via-[var(--text-main)] to-transparent" />

                {/* Rodapé */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-white/60 font-code text-sm">
                        <span className="text-[var(--text-main)]">©2026</span>{" "}
                        <span className="text-[var(--text-main)] font-semibold">davidev</span> - Todos os direitos reservados
                    </p>

                    <p className="text-white/60 font-code text-sm flex items-center justify-center md:justify-end gap-1">
                        Feito com <span className="text-red-500 text-sm">❤</span> e código
                    </p>
                </div>

                {/* Console Message */}
                <div className="mt-8 p-4 border-2 border-[var(--text-main)] rounded-lg bg-black/40 overflow-x-auto">
                    <code className="text-[var(--text-main)] font-code text-sm">
                        console.log(<span className="text-green-400">'Obrigado pela visita! 🚀 Curioso? Explore o código no meu GitHub!'</span>);
                    </code>
                </div>
            </div>
        </footer>
    );
}
