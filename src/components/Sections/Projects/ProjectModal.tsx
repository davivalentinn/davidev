import { useEffect, useRef } from "react";
import type { Project } from "../../../types/Project";
import { RiCloseLine } from "react-icons/ri";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  // 🔒 trava scroll do body
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      // Fallback para navegadores que não suportam scrollbar-gutter
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [project]);

  // ❌ clique fora fecha
  function handleOutsideClick(e: React.MouseEvent) {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  }

  if (!project) return null;

  return (
    <div
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    >
      <div
        ref={modalRef}
        className="bg-[var(--bg-card)] p-4 sm:p-6 md:p-8 rounded-xl w-[650px] max-w-full max-h-[85vh] overflow-y-auto relative animate-fadeIn"
      >
        {/* BOTÃO FECHAR */}
        <button
          onClick={onClose}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 cursor-pointer text-white hover:text-[var(--text-main)] transition sticky z-10"
        >
          <RiCloseLine size={24} className="sm:w-[28px] sm:h-[28px]" />
        </button>

        {/* TITULO */}
        <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-3 sm:mb-4 font-main uppercase">
          {project.title}
        </h2>

        {/* DESCRIÇÃO */}
        <p className="text-xs sm:text-sm md:text-base text-zinc-300 mb-4 sm:mb-6 font-body text-justify leading-relaxed">
          {project.longDescription || project.description}
        </p>

        {/* FEATURES */}
        {project.features && (
          <div>
            <h3 className="text-white font-bold font-main text-sm sm:text-base md:text-lg mb-2 sm:mb-3 uppercase">
              Funcionalidades
            </h3>

            <ul className="space-y-1 sm:space-y-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-xs sm:text-sm md:text-base text-zinc-100 font-body flex items-start gap-2"
                >
                  <span className="text-[var(--text-main)] mt-0.5">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
