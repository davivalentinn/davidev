import type { Project } from "../../../types/Project";
import { RiGithubFill, RiInformationLine, RiRocketLine } from "react-icons/ri";
import { useReveal } from '../../../hooks/useReveal.js'


interface Props {
  project: Project;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: Props) {
  useReveal();
  return (
    <div className="reveal relative bg-[var(--bg-card)] rounded-xl overflow-hidden shadow-lg flex flex-col h-full">

      {/* IMAGEM */}
      <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden group">

        {/* IMG */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* OVERLAY HOVER */}
        <div
          onClick={() => onOpen(project)}
          className="
            absolute inset-0 bg-black/80
            flex flex-col items-center justify-center
            opacity-0 group-hover:opacity-100
            transition duration-500 cursor-pointer
          "
        >
          <RiInformationLine
            size={40}
            className="text-[var(--text-main)] mb-2"
          />
          <span className="text-white uppercase tracking-wider font-main font-semibold">
            Saiba mais
          </span>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col flex-1">
        <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4 font-main uppercase reveal">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-1 sm:gap-2">
          {project.tech.map((t, i) => (
            <span key={i} className="px-2 sm:px-3 py-0.5 sm:py-1 font-code text-xs sm:text-sm bg-[var(--bg-tech)] rounded text-white reveal">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-3 sm:pt-4 md:pt-5 lg:pt-6 flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 w-full">

          {project.deploy && (
            <a
              href={project.deploy}
              target="_blank"
              className="
              relative overflow-hidden group
              flex items-center justify-center sm:justify-start gap-2
              bg-[var(--bg-button)] p-2 sm:p-2 px-3 sm:px-4 rounded text-white font-main font-bold text-sm sm:text-sm
              flex-1 sm:flex-initial
              "
            >
              <span className="relative z-10 flex items-center gap-2">
                Deploy
                <RiRocketLine className="text-base sm:text-lg md:text-xl" />
              </span>

              <span className="
                pointer-events-none absolute inset-0
                left-[-120%]
                bg-[linear-gradient(45deg,transparent_0%,rgba(255,255,255,0.5)_50%,transparent_100%)]
                transition-all duration-700
                group-hover:left-[120%] 
" />
            </a>
          )}

          {project.code && (
            <a
              href={project.code}
              target="_blank"
              className="
            relative overflow-hidden group
            flex items-center justify-center sm:justify-start gap-2
            bg-[var(--bg-button)] p-2 sm:p-2 px-3 sm:px-4 rounded text-white font-main font-bold text-sm sm:text-sm
            flex-1 sm:flex-initial
            "
            >
              <span className="relative z-10 flex items-center gap-2">
                Código
                <RiGithubFill className="text-base sm:text-lg md:text-xl" />
              </span>

              <span className="
              pointer-events-none absolute inset-0
              left-[-120%]
              bg-[linear-gradient(45deg,transparent_0%,rgba(255,255,255,0.5)_50%,transparent_100%)]
              transition-all duration-700
              group-hover:left-[120%]
  " />
            </a>

          )}

        </div>


      </div>
    </div>
  );
}
