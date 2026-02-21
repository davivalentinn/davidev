import bgHero from '../../../assets/images/bg-hero.svg';
import reactIcon from "../../../assets/icons/react.svg";
import typescriptIcon from "../../../assets/icons/typescript.svg";
import javascriptIcon from "../../../assets/icons/javascript.svg";
import tailwindcssIcon from "../../../assets/icons/tailwindcss.svg";
import gitIcon from "../../../assets/icons/git.svg";
import githubIcon from "../../../assets/icons/github.svg";
import phpIcon from "../../../assets/icons/php.svg";
import mysqlIcon from "../../../assets/icons/mysql.svg";
import { RiFileFill, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';


export function Hero() {
    return (
        <section
            className="
    relative w-full min-h-screen overflow-hidden
    bg-no-repeat
    bg-none sm:bg-[image:var(--bg-hero)]
    flex flex-col justify-between py-20 sm:py-0
  "
            style={{
                // define a imagem como variável
                ['--bg-hero']: `url(${bgHero})`,
                backgroundSize: "clamp(900px, 120vw, 1500px)",
                backgroundPosition:
                    "left clamp(-300px, -20vw, -100px) top 250px",
            }}
        >
            {/* container do conteúdo - NOME E TECNOLOGIAS */}
            <div className="container mx-auto px-4 flex-1 flex items-center">
                <div className="w-full text-center">
                    <div className='lg:text-right flex flex-col items-center lg:items-end'>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-main font-bold">
                            Davi Valetins de Sousa
                        </h1>
                        <div className='mt-2 sm:mt-3 flex flex-wrap items-center justify-center gap-x-1 sm:gap-x-2 gap-y-2'>
                            <p className='uppercase text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white font-main'>Dev</p>
                            <span className="hidden sm:block text-white font-bold text-xs sm:text-lg">|</span>
                            <p className='uppercase text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white font-main'>Front</p>
                            <span className="hidden sm:block text-white font-bold text-xs sm:text-lg">|</span>
                            <p className='uppercase text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[var(--text-main)] font-main'>JS</p>
                            <span className="hidden sm:block text-white font-bold text-xs sm:text-lg">|</span>
                            <p className='uppercase text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[var(--text-main)] font-main'>React</p>
                            <span className="hidden sm:block text-white font-bold text-xs sm:text-lg">|</span>
                            <p className='uppercase text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[var(--text-main)] font-main'>TS</p>
                            <span className="hidden sm:block text-white font-bold text-xs sm:text-lg">|</span>
                            <p className='uppercase text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[var(--text-main)] font-main'>Tailwind</p>
                        </div>

                        <div className='mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3'>
                            <img className='relative z-10 cursor-pointer w-6 h-6 sm:w-8 sm:h-8' src={reactIcon} alt="React Icon" />
                            <img className='relative z-10 cursor-pointer w-6 h-6 sm:w-8 sm:h-8' src={typescriptIcon} alt="Typescript Icon" />
                            <img className='relative z-10 cursor-pointer w-6 h-6 sm:w-8 sm:h-8' src={javascriptIcon} alt="Javascript Icon" />
                            <img className='relative z-10 cursor-pointer w-6 h-6 sm:w-8 sm:h-8' src={tailwindcssIcon} alt="TailwindCss Icon" />
                            <img className='relative z-10 cursor-pointer w-6 h-6 sm:w-8 sm:h-8' src={gitIcon} alt="Git Icon" />
                            <img className='relative z-10 cursor-pointer w-6 h-6 sm:w-8 sm:h-8' src={githubIcon} alt="GitHub Icon" />
                            <img className='relative z-10 cursor-pointer w-6 h-6 sm:w-8 sm:h-8' src={phpIcon} alt="Php Icon" />
                            <img className='relative z-10 cursor-pointer w-6 h-6 sm:w-8 sm:h-8' src={mysqlIcon} alt="MySql Icon" />
                        </div>
                    </div>

                    {/* TEXTO - Código que resolve, Design que comunica */}
                    <div className="lg:text-left lg:items-start flex flex-col gap-3 sm:gap-4 mt-8 sm:mt-10 lg:mt-12">
                        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-main font-extrabold uppercase">
                            Código que{" "}
                            <span className="text-[var(--text-main)] blink">
                                resolve.
                            </span>
                        </h1>

                        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-main font-extrabold uppercase">
                            Design que{" "}
                            <span className="text-[var(--text-main)] blink-delay">
                                comunica.
                            </span>
                        </h1>
                    </div>

                    {/* BOTÕES */}
                    <div className="lg:text-right lg:items-end flex flex-col  mx-auto sm:mx-0 sm:flex-row gap-2 sm:gap-3 lg:gap-4 mt-8 sm:mt-10 lg:mt-12 w-1/2">
                        <div className="relative cursor-pointer overflow-hidden group flex items-center justify-center gap-2 sm:gap-2.5 bg-[var(--bg-button)] px-3 sm:px-5 lg:px-4 py-2.5 sm:py-3 lg:py-1.5 rounded flex-1 sm:flex-end">
                            <a href="https://github.com/davivalentinn" target="_blank" className="uppercase font-main text-white text-sm sm:text-base lg:text-lg font-bold relative z-10">
                                GitHub
                            </a>
                            <RiGithubFill className="text-white relative z-10 text-base sm:text-lg lg:text-xl" />
                            <span className="pointer-events-none absolute bottom-0 left-[-120%] w-[120%] h-full bg-[linear-gradient(45deg,transparent_0%,rgba(255,255,255,0.6)_50%,transparent_100%)] transition-all duration-600 ease-in-out group-hover:left-[120%]" />
                        </div>

                        <div className="relative cursor-pointer overflow-hidden group flex items-center justify-center gap-2 sm:gap-2.5 bg-[var(--bg-button)] px-3 sm:px-5 lg:px-4 py-2.5 sm:py-3 lg:py-1.5 rounded flex-1 sm:flex-end">
                            <a href="https://www.linkedin.com/in/davivalentinn/" target="_blank" className="uppercase font-main text-white text-sm sm:text-base lg:text-lg font-bold relative z-10">
                                Linkedin
                            </a>
                            <RiLinkedinBoxFill className="text-white relative z-10 text-base sm:text-lg lg:text-xl" />
                            <span className="pointer-events-none absolute bottom-0 left-[-120%] w-[120%] h-full bg-[linear-gradient(45deg,transparent_0%,rgba(255,255,255,0.6)_50%,transparent_100%)] transition-all duration-600 ease-in-out group-hover:left-[120%]" />
                        </div>

                        <div className="relative cursor-pointer overflow-hidden group flex items-center justify-center gap-2 sm:gap-2.5 bg-[var(--bg-button)] px-3 sm:px-5 lg:px-4 py-2.5 sm:py-3 lg:py-1.5 rounded flex-1 sm:flex-end">
                            <a href="/curriculo.pdf" download="Davi-Valetins-Curriculo.pdf" className="uppercase font-main text-white text-sm sm:text-base lg:text-lg font-bold relative z-10">
                                Currículo
                            </a>
                            <RiFileFill className="text-white relative z-10 text-base sm:text-lg lg:text-xl" />
                            <span className="pointer-events-none absolute bottom-0 left-[-120%] w-[120%] h-full bg-[linear-gradient(45deg,transparent_0%,rgba(255,255,255,0.6)_50%,transparent_100%)] transition-all duration-600 ease-in-out group-hover:left-[120%]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>







    )
}