import logoUninter from '../../../assets/icons/uninter.svg';
import logoIfac from '../../../assets/icons/ifac.png';
import {useReveal} from '../../../hooks/useReveal'



export function About() {
    useReveal();
    return (
        <section id='about-me' className="container mx-auto mb-20 px-4">
            <div>
                <h1 className="font-main font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase reveal">Sobre Mim</h1>
                <div className="relative w-full h-2 mt-3 overflow-hidden">
                    <span className="absolute left-0 top-0 h-full w-full bg-[var(--bg-main)] line-reveal" />
                </div>


                <div className="flex flex-col mt-12 sm:mt-16 md:mt-20 reveal">
                    <h1 className="font-main font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white">Desenvolvedor</h1>
                    <h1 className="font-main font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-[var(--text-main)]">Front-End</h1>
                </div>

                <div className="mt-8 sm:mt-10 reveal">
                    <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl text-left text-white">
                        Minha jornada no <b>desenvolvimento web</b> começou em 2023, durante o <b>ensino médio integrado ao curso técnico em Informática para Internet.</b> Ao longo do 2º e 3º ano, atuei em projetos como desenvolvedor front-end e também no design das interfaces, unindo código e criatividade.
                        Atualmente, curso <b>Análise e Desenvolvimento de Sistemas (ADS) pela UNINTER</b> e sigo evoluindo com foco em aplicações web modernas.
                    </p>
                </div>

                {/* Formação Academica - Linha do Tempo */}
                <div className="container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-[1fr_120px] gap-6 sm:gap-8 md:gap-12">
                    {/* Instituições */}
                    <div className=''>
                        {/* Uninter */}
                        <div className='flex flex-col m-6 sm:m-8 md:m-12 reveal'>
                            <img
                                className='w-32 h-auto sm:w-36 md:w-40 p-2 object-contain'
                                src={logoUninter} alt="Logo Uninter" />
                            <h2 className='font-main text-white font-bold text-base sm:text-lg md:text-xl p-2 uppercase'>
                                CURSO SUPERIOR DE TECNOLOGIA EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS
                            </h2>
                            <h3 className='font-main text-white text-sm sm:text-base md:text-lg lg:text-xl p-2'>
                                Instituição: <b>CENTRO UNIVERSITÁRIO INTERNACIONAL UNINTER</b>
                            </h3>
                            <div className='flex flex-col sm:flex-row gap-1 sm:gap-2 md:gap-3 p-2'>
                                <p className='font-main text-xs sm:text-sm md:text-base'>
                                    Início: <b>02/02/2026</b>
                                </p>
                                <p className='font-main text-xs sm:text-sm md:text-base'>
                                    Término: <b>02/08/2028</b>
                                </p>
                                <p className='font-main text-xs sm:text-sm md:text-base'>
                                    Situação: <b>Cursando</b>
                                </p>
                            </div>
                        </div>

                        {/* Ifac */}
                        <div className='flex flex-col m-6 sm:m-8 md:m-12 reveal'>
                            <img
                                className='w-32 h-auto sm:w-36 md:w-40 p-2 object-contain'
                                src={logoIfac} alt="Logo Ifac" />
                            <h2 className='font-main text-white font-bold text-base sm:text-lg md:text-xl p-2 uppercase'>
                                ensino médio integrado ao curso técnico em informática para internet
                            </h2>
                            <h3 className='font-main text-white text-sm sm:text-base md:text-lg lg:text-xl p-2'>
                                Instituição: <b>Instituto Federal de Educação, Ciência e Tecnologia do Acre - IFAC</b>
                            </h3>
                            <div className='flex flex-col sm:flex-row gap-1 sm:gap-2 md:gap-3 p-2'>
                                <p className='font-main text-xs sm:text-sm md:text-base'>
                                    Início: <b>06/02/2023</b>
                                </p>
                                <p className='font-main text-xs sm:text-sm md:text-base'>
                                    Término: <b>16/01/2026</b>
                                </p>
                                <p className='font-main text-xs sm:text-sm md:text-base'>
                                    Situação: <b>concluído</b>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Linha do Tempo Vertical */}
                    <div className="relative hidden lg:flex justify-center">
                        {/* Linha */}
                        <div className="absolute top-0 bottom-0 w-[4px] bg-white/90 rounded-full" />

                        {/* Marco 2026 */}
                        <div className="absolute top-[120px] flex items-center justify-center reveal timeline-dot">
                            <div className="w-14 h-14 rounded-full bg-[var(--bg-button)] flex items-center justify-center font-main font-bold text-white">
                                2026
                            </div>
                        </div>

                        {/* Marco 2023 */}
                        <div className="absolute top-[420px] flex items-center justify-center reveal timeline-dot">
                            <div className="w-14 h-14 rounded-full bg-[var(--bg-button)] flex items-center justify-center font-main font-bold text-white">
                                2023
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}