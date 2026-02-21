import { useState } from "react";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import { MdContentCopy, MdCheck } from "react-icons/md";

interface ContactInfo {
    label: string;
    value: string;
    icon: React.ReactNode;
}

const contactChannels: ContactInfo[] = [
    {
        label: "EMAIL",
        value: "davivalentns@gmail.com",
        icon: <SiGmail />,
    },
    {
        label: "LINKEDIN",
        value: "in/davivalentinn",
        icon: <SiLinkedin />,
    },
    {
        label: "GITHUB",
        value: "@davivalentinn",
        icon: <SiGithub />,
    },
];

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const [copiedMessage, setCopiedMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [showErrors, setShowErrors] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Limpar erro quando começar a digitar
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const handleCopy = (text: string, label: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setCopiedMessage(label);
        setTimeout(() => {
            setCopiedIndex(null);
            setCopiedMessage("");
        }, 2000);
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = "Nome é obrigatório";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email é obrigatório";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Email inválido";
        }
        if (!formData.subject.trim()) {
            newErrors.subject = "Assunto é obrigatório";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Mensagem é obrigatória";
        } else if (formData.message.trim().length < 15) {
            newErrors.message = "Mensagem deve ter no mínimo 15 caracteres";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            setShowErrors(true);
            return;
        }

        setShowErrors(false);
        setIsSubmitting(true);

        try {
            // Aqui você pode adicionar a lógica para enviar o email
            // Por enquanto, apenas simulamos o envio
            console.log("Formulário enviado:", formData);
            // Limpar formulário após envio
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
            setIsSuccess(true);
        } catch (error) {
            console.error("Erro ao enviar:", error);
            alert("Erro ao enviar a mensagem");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-12 sm:py-16 md:py-20 w-full container mx-auto">
            <div className="relative py-12 sm:py-16 md:py-24 overflow-hidden px-4">

                <div className="text-center mb-12 sm:mb-14 md:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-main font-bold uppercase text-white container mx-auto relative z-10 reveal">
                        Fale Comigo
                    </h1>
                    <div className="flex justify-center mt-3 sm:mt-4">
                        <div className="h-1 w-16 sm:w-20 bg-[var(--text-main)] rounded-full" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 relative z-10">
                    {/* Lado Esquerdo - Canais de Comunicação */}
                    <div className="border-2 border-[var(--text-main)] rounded-lg p-4 sm:p-6 md:p-8 bg-black/20 backdrop-blur-sm">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-main font-bold uppercase text-white mb-4 sm:mb-6 md:mb-8 flex items-center gap-2">
                            <div className="w-1 h-8 bg-[var(--text-main)]" />
                            Canais de Comunicação
                        </h2>

                        <div className="space-y-6 mb-8">
                            {contactChannels.map((channel, index) => (
                                <div key={index} className="relative">
                                    <div
                                        className="group flex items-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 bg-black/40 rounded-lg hover:bg-black/60 transition-all duration-300 cursor-pointer"
                                        onClick={() =>
                                            handleCopy(channel.value, channel.label, index)
                                        }
                                    >
                                        <div className="text-xl sm:text-2xl md:text-3xl text-[var(--text-main)] group-hover:scale-110 transition-transform duration-300">
                                            {channel.icon}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs sm:text-xs md:text-sm text-[var(--text-main)] font-semibold uppercase">
                                                {channel.label}
                                            </p>
                                            <p className="text-white font-body text-sm sm:text-base">
                                                {channel.value}
                                            </p>
                                        </div>
                                        <div
                                            className={`text-lg sm:text-xl md:text-2xl transition-all duration-300 ${
                                                copiedIndex === index
                                                    ? "text-green-400 scale-110"
                                                    : "text-[var(--text-main)] opacity-0 group-hover:opacity-100"
                                            }`}
                                        >
                                            <MdContentCopy />
                                        </div>
                                    </div>

                                    {/* Feedback Toast de Cópia */}
                                    {copiedIndex === index && (
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg font-body text-sm font-semibold whitespace-nowrap shadow-lg animate-bounce">
                                            ✓ {copiedMessage} copiado!
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Status Box */}
                        <div className="border-l-4 border-[var(--text-main)] pl-3 sm:pl-4 space-y-4 sm:space-y-5 md:space-y-6">
                            <div className="flex items-center gap-2">
                                <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-white font-code font-semibold text-xs sm:text-sm">
                                    STATUS: ONLINE
                                </span>
                            </div>
                            <p className="text-white/70 font-code text-xs sm:text-sm">
                                DISPONIBILIDADE: ABERTO A PROJETOS
                            </p>
                            <p className="text-white/70 font-code text-xs sm:text-sm">
                                TEMPO RESPOSTA: 24H
                            </p>
                        </div>
                    </div>

                    {/* Lado Direito - Formulário */}
                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="border-2 border-[var(--text-main)] rounded-lg p-4 sm:p-6 md:p-8 bg-black/20 backdrop-blur-sm"
                    >
                        <h2 className="text-lg sm:text-xl md:text-2xl font-main font-bold uppercase text-white mb-4 sm:mb-6 md:mb-8 flex items-center gap-2">
                            <div className="w-1 h-8 bg-[var(--text-main)]" />
                            Envie sua Mensagem
                        </h2>

                        <div className="space-y-4 sm:space-y-5 md:space-y-6">
                            {/* Nome */}
                            <div>
                                <label className="text-sm text-[var(--text-main)] font-semibold font-code uppercase block mb-2 flex items-center gap-1">
                                    <span className="text-[var(--text-main)]">●</span>
                                    Seu nome
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="DIGITE SEU NOME"
                                    className={`w-full px-4 py-3 bg-black/40 border-2 text-white placeholder-white/40 focus:outline-none focus:bg-black/60 transition-all duration-300 rounded-lg font-body text-xs sm:text-sm md:text-base ${
                                        errors.name
                                            ? "border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                                            : "border-[var(--text-main)] focus:shadow-[0_0_20px_rgba(255,214,0,0.3)]"
                                    }`}
                                />
                                {errors.name && (
                                    <span className="text-red-400 text-xs mt-1 block font-body">
                                        ✗ {errors.name}
                                    </span>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-sm text-[var(--text-main)] font-semibold font-code uppercase block mb-2 flex items-center gap-1">
                                    <span className="text-[var(--text-main)]">●</span>
                                    Seu email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="DIGITE SEU EMAIL"
                                    className={`w-full px-4 py-3 bg-black/40 border-2 text-white placeholder-white/40 focus:outline-none focus:bg-black/60 transition-all duration-300 rounded-lg font-body text-xs sm:text-sm md:text-base ${
                                        errors.email
                                            ? "border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                                            : "border-[var(--text-main)] focus:shadow-[0_0_20px_rgba(255,214,0,0.3)]"
                                    }`}
                                />
                                {errors.email && (
                                    <span className="text-red-400 text-xs mt-1 block font-body">
                                        ✗ {errors.email}
                                    </span>
                                )}
                            </div>

                            {/* Assunto */}
                            <div>
                                <label className="text-sm text-[var(--text-main)] font-semibold font-code uppercase block mb-2 flex items-center gap-1">
                                    <span className="text-[var(--text-main)]">●</span>
                                    Assunto
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="SOBRE O QUE QUER FALAR?"
                                    className={`w-full px-4 py-3 bg-black/40 border-2 text-white placeholder-white/40 focus:outline-none focus:bg-black/60 transition-all duration-300 rounded-lg font-body text-xs sm:text-sm md:text-base ${
                                        errors.subject
                                            ? "border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                                            : "border-[var(--text-main)] focus:shadow-[0_0_20px_rgba(255,214,0,0.3)]"
                                    }`}
                                />
                                {errors.subject && (
                                    <span className="text-red-400 text-xs mt-1 block font-body">
                                        ✗ {errors.subject}
                                    </span>
                                )}
                            </div>

                            {/* Mensagem */}
                            <div>
                                <label className="text-sm text-[var(--text-main)] font-semibold font-code uppercase block mb-2 flex items-center gap-1">
                                    <span className="text-[var(--text-main)]">●</span>
                                    Mensagem
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="CONTE-ME MAIS SOBRE SEU PROJETO OU IDEIA..."
                                    rows={6}
                                    className={`w-full px-4 py-3 bg-black/40 border-2 text-white placeholder-white/40 focus:outline-none focus:bg-black/60 transition-all duration-300 rounded-lg font-body resize-none text-xs sm:text-sm md:text-base ${
                                        errors.message
                                            ? "border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                                            : "border-[var(--text-main)] focus:shadow-[0_0_20px_rgba(255,214,0,0.3)]"
                                    }`}
                                />
                                {errors.message && (
                                    <span className="text-red-400 text-xs mt-1 block font-body">
                                        ✗ {errors.message}
                                    </span>
                                )}
                                <span className="text-[var(--text-main)]/60 text-xs mt-2 block font-body">
                                    Mínimo 15 caracteres • {formData.message.length} / 15
                                </span>
                            </div>

                            {/* Mensagem de erro geral */}
                            {showErrors && Object.keys(errors).length > 0 && (
                                <div className="bg-red-500/10 border-2 border-red-500 rounded-lg p-4 animate-pulse">
                                    <p className="text-red-400 font-body font-semibold mb-2">
                                        ✗ Erro ao enviar formulário
                                    </p>
                                    <ul className="text-red-400 text-xs space-y-1 font-body list-disc list-inside">
                                        {Object.entries(errors).map(([field, message]) => (
                                            <li key={field}>{message}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Botão Submit */}
                            <button
                                type="submit"
                                disabled={isSubmitting || isSuccess}
                                className={`w-full py-2 sm:py-3 md:py-4 mt-6 sm:mt-8 font-main font-extrabold uppercase rounded-lg transition-all cursor-pointer duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base ${
                                    isSuccess
                                        ? "bg-green-500 text-white hover:bg-green-600"
                                        : "bg-[var(--text-main)] text-black hover:bg-[var(--text-main)]/90"
                                } active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed`}
                            >
                                {isSuccess ? (
                                    <>
                                        <MdCheck className="text-xl" />
                                        Enviado
                                    </>
                                ) : isSubmitting ? (
                                    "Enviando..."
                                ) : (
                                    "Enviar Mensagem"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
