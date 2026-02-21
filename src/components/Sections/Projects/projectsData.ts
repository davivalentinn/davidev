import type { Project } from "../../../types/Project";

import todoListImg from '../../../assets/images/todolist.png'
import vannilyImg from '../../../assets/images/vannily.png'
import candeiasImg from '../../../assets/images/candeias.png'
import codeImg from '../../../assets/images/codecraftsummit.png'
import linktreeImg from '../../../assets/images/linktree.png'
import barberImg from '../../../assets/images/barber.png'
import devcurrencyImg from '../../../assets/images/devcurrency.png'


export const projects: Project[] = [
  {
    id: 1,
    title: "Lista de Tarefas (To-Do-List)",
    description: "Este projeto é uma lista de tarefas (To-Do List) desenvolvida com React usando TypeScript. A aplicação permite ao usuário adicionar, editar e excluir tarefas, com os dados sendo salvos localmente no navegador através do localStorage, garantindo que as tarefas persistam mesmo após recarregar a página.",
    features: [
      'Adicionar novas tarefas',
      'Editar tarefas existentes',
      'Excluir tarefas',
      'Salvar dados no navegador com localStorage'
    ],
    tech: ["React", "TypeScript", "TailwindCss", 'Git', 'Github'],
    image: todoListImg,
    deploy: 'https://davivalentinn.github.io/todolist/',
    code: 'https://github.com/davivalentinn/todolist'
  },
  {
    id: 2,
    title: "Ecommerce Vannily",
    description: "O Vannily é um e-commerce full stack desenvolvido com foco em aprendizado prático e boas práticas de desenvolvimento web. A plataforma é voltada para a venda de roupas e jogos, com um visual moderno e funcionalidades essenciais de um sistema real de e-commerce.",
    features: [
      'Listagem de produtos consumidos a partir de uma API própria',
      'Barra de pesquisa com filtro de produtos',
      'Página individual de produto com dados dinâmicos',
      'Adicionar produtos aos favoritos (somente usuários logados)',
      'Adicionar produtos ao carrinho (somente usuários logados)',
      'Sistema de autenticação de usuários',
      'Navegação entre páginas sem recarregamento'
    ],
    tech: ["React", "Typescript", "TailwindCss", 'Java', 'SpringBoot', 'MySQl', 'Workbench', 'Maven', 'Git', 'GitHub'],
    image: vannilyImg,
    deploy: '',
    code: 'https://github.com/davivalentinn/vannily-site'
  },
  {
    id: 3,
    title: "Grupo Candeias - Institucional",
    description: "Participei da equipe de desenvolvimento e design do site Candeias, com o objetivo de promover a divulgação do grupo de capoeira, seus eventos e ações.",
    tech: ["HTML", "CSS", "Javascript", 'Bootstrap', 'Git', 'GitHub'],
    image: candeiasImg,
    deploy: 'https://www.grupocandeias.com.br/',
    code: 'https://github.com/tonhao-dev/site-candeias'
  },
  {
    id: 4,
    title: "Code craft summit 2025 - nlw",
    description: "Este projeto foi desenvolvido com foco na aplicação prática de tecnologias modernas de front-end e back-end, envolvendo a construção de uma interface robusta e a integração com uma API REST bem estruturada.",
    tech: ["React", "NextJS", "TailwindCSS", 'Typescript', 'NodeJS', 'Docker', 'Git', 'Github'],
    image: codeImg,
    deploy: '',
    code: 'https://github.com/davivalentinn/nlw-connect-code-craft'
  },
  {
    id: 5,
    title: "Linktree",
    description: "",
    tech: ["React", "TailwindCSS", "Typescript", 'Git', 'GitHub'],
    image: linktreeImg,
    deploy: 'https://www.grupocandeias.com.br/',
    code: 'https://github.com/tonhao-dev/site-candeias'
  },
  {
    id: 6,
    title: "Barbearia - Website Responsivo",
    description: "Este repositório contém um site moderno e responsivo para uma barbearia, desenvolvido com HTML, CSS e SCSS, com foco em estética, usabilidade e agendamento online. Ideal para apresentação institucional de serviços.",
    tech: ["HTML", "CSS", "Javascript", 'SCSS', 'AOS', 'Git', 'GitHub'],
    image: barberImg,
    deploy: 'https://davivalentinn.github.io/barber/',
    code: 'https://github.com/davivalentinn/barber'
  },
  {
    id: 7,
    title: "Devcurrency",
    description: "Uma aplicação web feita em React + TypeScript que consome a API da CoinCap para exibir informações em tempo real sobre criptomoedas. O usuário pode buscar moedas, visualizar listas paginadas e acessar detalhes individuais de cada criptoativo.",
    tech: ["HTML", "CSS", "Javascript", 'Bootstrap', 'Git', 'GitHub'],
    image: devcurrencyImg,
    deploy: 'https://davivalentinn.github.io/devcurrency/',
    code: 'https://github.com/davivalentinn/devcurrency'
  },
];
