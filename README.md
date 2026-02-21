# 🎨 Portfólio - Davi Valentins de Sousa

Um portfólio digital moderno e responsivo de um desenvolvedor Front-End, desenvolvido com as mais recentes tecnologias web. O projeto é uma vitrine profissional que apresenta habilidades, experiência acadêmica, projetos realizados e canais de comunicação, com design elegante dark-mode e animações fluidas.

---

## 🛠️ Tecnologias Utilizadas

- **React 19.2** - Framework JavaScript para construção de interfaces com componentes reutilizáveis
- **TypeScript 5.9** - Tipagem estática para desenvolvimento mais seguro e escalável
- **Tailwind CSS 4.1** - Framework CSS utility-first para estilização responsiva e consistente
- **Vite 7.3** - Build tool ultrarrápido com suporte a HMR (Hot Module Replacement)
- **React Router DOM 7.13** - Roteamento e navegação entre páginas
- **React Icons 5.5** - Biblioteca de ícones SVG escaláveis
- **Framer Motion 12.34** - Biblioteca de animações avançadas
- **TypeScript com ESLint** - Qualidade de código e boas práticas garantidas

---

## ✨ Funcionalidades Principais

### 1. Hero Section
- Apresentação impactante com nome, title e tecnologias
- Botões CTA (GitHub, LinkedIn, Currículo) com efeito shine gradient
- Ícones de tecnologias (React, TypeScript, JavaScript, Tailwind, Git, GitHub, PHP, MySQL)
- Frase motivacional com efeito blink: "Código que resolve. Design que comunica."
- Background responsivo com imagem SVG
- Totalmente responsivo (mobile, tablet, desktop)

### 2. Seção Sobre
- Introdução profissional detalhada
- Histórico acadêmico com timeline visual
- Cards de instituições de ensino (UNINTER e IFAC)
- Logos das instituições com informações de datas e status
- Animações ao scroll (reveal effect)
- Layout responsivo com grid adaptativo

### 3. Seção de Habilidades
- Grid responsivo de tecnologias (2 colunas mobile → 3 tablet → 4 desktop)
- Cards com hover effects e shimmer animations
- Apresentação visual de todas as skills técnicas
- Animações suaves ao scroll

### 4. Seção de Projetos
- Grid responsivo de cards de projetos
- Cada projeto exibe: imagem, título, tecnologias e botões de ação
- Modal interativo para visualização detalhada
  - Scroll interno para conteúdo longo
  - Texto responsivo (xs/sm/md/base)
  - Lista de funcionalidades
  - Descrição completa
- Botões para acessar código/demo
- Tamanhos de imagem otimizados por breakpoint

### 5. Formulário de Contato
- Validação completa do lado do cliente
- Campos responsivos (nome, email, assunto, mensagem)
- Feedback visual em tempo real
- Mensagens de erro personalizadas
- Canais de comunicação (email, LinkedIn, GitHub) com funcionalidade de copiar
- Status online e disponibilidade
- Botão de envio com estados (enviando, enviado, erro)

### 6. Header/Navegação
- Menu responsivo com mobile-first approach
- Logo adaptável por tamanho de tela
- Navegação suave entre seções

### 7. Sistema de Animações
- Intersection Observer Hook para carregar animações ao scroll
- Animação de linha (line-reveal) que se ativa ao passar pela seção
- Efeitos fade-in com slide
- Efeito blink em textos
- Transições suaves em hover

---

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints do Tailwind:
- **Mobile (< 640px)**: Layout stack, textos menores, botões full-width
- **Tablet (640px - 1024px)**: Transição para layouts 2-3 colunas
- **Desktop (> 1024px)**: Layout completo com 4 colunas, espaçamento otimizado

---

## 🎯 Características Principais

✅ Dark mode elegante com paleta de cores customizada  
✅ Animações suaves disparadas ao scroll  
✅ Formulário de contato com validação em tempo real  
✅ Modal responsivo para visualização de projetos  
✅ Código bem estruturado e tipado com TypeScript  
✅ Performance otimizada com Vite  
✅ SEO-friendly com estrutura semântica  
✅ 100% responsivo e mobile-first  
✅ Ícones escaláveis SVG  
✅ Melhor experiência do usuário (UX) prioritária  

---

## 🚀 Como Usar

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```

### Build para Produção
```bash
npm run build
```

### Preview da Build
```bash
npm run preview
```

### Verificar Linting
```bash
npm run lint
```

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header/
│   ├── Sections/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── ui/
│   └── BackToTop/
├── hooks/
│   └── useReveal.js
├── types/
│   ├── Project.ts
│   └── revealOptions.ts
├── assets/
│   ├── icons/
│   └── images/
├── App.tsx
├── main.tsx
└── index.css
```

