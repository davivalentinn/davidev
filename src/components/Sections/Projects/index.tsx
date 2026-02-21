import { useReveal } from '../../../hooks/useReveal.js'
import { useState } from 'react';

import type { Project } from '../../../types/Project.ts'

import { projects } from "./projectsData";

import { ProjectCard } from "./ProjectCard";

import { ProjectModal } from "./ProjectModal";

export function Projects() {
    useReveal();
    const [selected, setSelected] = useState<Project | null>(null);

    return (
        <section id='projects' className="">

            <div className='relative py-12 sm:py-16 md:py-24 overflow-hidden px-4'>
                <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 items-center">
                    <div className="h-[6px] w-[200px] md:w-[300px] bg-[var(--text-main)] project-line reveal" />
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[var(--text-main)] project-dot reveal" />
                </div>


                <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 items-center">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[var(--text-main)] project-dot reveal" />
                    <div className="h-[6px] w-[200px] md:w-[300px] bg-[var(--text-main)] project-line reveal" />
                </div>

                <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-main font-bold uppercase text-white container mx-auto relative z-10 reveal">
                    Meus Projetos
                </h1>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-center w-full container mx-auto mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16 md:mb-20 px-4">

                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onOpen={setSelected}
                    />
                ))}

            </div>

            <ProjectModal
                project={selected}
                onClose={() => setSelected(null)}
            />


        </section>
    );
}
