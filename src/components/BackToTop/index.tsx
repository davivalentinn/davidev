import { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Hero tem aproximadamente a altura da viewport (100vh)
            // Mostra o botão quando scrollar mais de 100vh
            setIsVisible(window.scrollY > window.innerHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-40 w-14 h-14 cursor-pointer rounded-full bg-[var(--text-main)] text-black flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-[var(--text-main)]/50 hover:scale-110 transition-all duration-300 group ${
                isVisible
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-75 pointer-events-none"
            }`}
            title="Voltar ao topo"
        >
            <MdKeyboardArrowUp className="text-3xl back-to-top-icon group-hover:scale-125 transition-transform duration-300" />
        </button>
    );
}
