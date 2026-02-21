import { useState, useEffect } from 'react';
import { RiCustomerServiceLine, RiMenuLine, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/icons/logo.svg';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
                isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/50' : 'bg-transparent'
            }`}
        >
            <nav className="container mx-auto px-3 sm:px-4 py-2 sm:py-3 md:py-4 flex justify-between items-center">
                <div>
                    <img src={logo} alt="Logo" className="h-12 sm:h-16 md:h-20" />
                </div>

                {/* Menu Desktop */}
                <div className="hidden md:flex gap-3 lg:gap-4 items-center text-sm lg:text-base">
                    <a href="#about-me" className="font-main text-white font-medium hover:text-gray-300 transition-colors">
                        Sobre Mim
                    </a>
                    <a href="#projects" className="font-main text-white font-medium hover:text-gray-300 transition-colors">
                        Projetos
                    </a>
                    <a href="#skills" className="font-main text-white font-medium hover:text-gray-300 transition-colors">
                        Habilidades
                    </a>
                    <div className="relative overflow-hidden group flex items-center gap-1 lg:gap-2 bg-[var(--bg-button)] px-3 lg:px-4 py-1 lg:py-2 rounded">
                        <a href="#contact" className="font-main text-white font-bold relative z-10 text-sm lg:text-base">
                            Fale Comigo
                        </a>
                        <RiCustomerServiceLine className="text-white relative z-10 text-xl" />
                        <span className="pointer-events-none absolute bottom-0 left-[-120%] w-[120%] h-full bg-[linear-gradient(45deg,transparent_0%,rgba(255,255,255,0.6)_50%,transparent_100%)] transition-all duration-600 ease-in-out group-hover:left-[120%]" />
                    </div>
                </div>

                {/* Botão Hamburger Mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white text-2xl sm:text-3xl z-[60] relative"
                    aria-label="Menu"
                >
                    {isMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
                </button>

                {/* Overlay quando menu está aberto */}
                {isMenuOpen && (
                    <div
                        onClick={closeMenu}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-[51]"
                    />
                )}

                {/* Menu Mobile */}
                <div
                    className={`fixed top-0 left-0 h-screen w-56 sm:w-64 bg-black/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out md:hidden z-[52] ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className="flex flex-col gap-4 sm:gap-6 pt-16 sm:pt-20 px-4 sm:px-6">
                        
                           <a href="#about-me"
                            onClick={closeMenu}
                            className="font-main text-white text-lg sm:text-xl font-medium hover:text-gray-300 transition-colors border-b border-gray-700 pb-2 sm:pb-3"
                        >
                            Sobre Mim
                        </a>
                        
                            <a href="#projects"
                            onClick={closeMenu}
                            className="font-main text-white text-lg sm:text-xl font-medium hover:text-gray-300 transition-colors border-b border-gray-700 pb-2 sm:pb-3"
                        >
                            Projetos
                        </a>
                        
                            <a href="#skills"
                            onClick={closeMenu}
                            className="font-main text-white text-lg sm:text-xl font-medium hover:text-gray-300 transition-colors border-b border-gray-700 pb-2 sm:pb-3"
                        >
                            Habilidades
                        </a>
                        <div className="relative overflow-hidden group flex items-center gap-1 sm:gap-2 bg-[var(--bg-button)] px-3 sm:px-4 py-2 sm:py-3 rounded mt-3 sm:mt-4">
                            
                                <a href="#contact"
                                onClick={closeMenu}
                                className="font-main text-white text-sm sm:text-base md:text-lg font-bold relative z-10"
                            >
                                Fale Comigo
                            </a>
                            <RiCustomerServiceLine className="text-white relative z-10 text-xl" />
                            <span className="pointer-events-none absolute bottom-0 left-[-120%] w-[120%] h-full bg-[linear-gradient(45deg,transparent_0%,rgba(255,255,255,0.6)_50%,transparent_100%)] transition-all duration-600 ease-in-out group-hover:left-[120%]" />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}