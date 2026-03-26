import web_store from "/assets/web-store-image.png";
import finance_image from "/assets/finance_image.png";
import ordem_livros from "/assets/ordem-livros.png";
import tn_lib from "/assets/tn_lib.png";
import usf_image from "/assets/usf_image.png";
import mcdonalds from "/assets/mcdonalds.png";
import trips from "/assets/trips.png";
import aparatus from "/assets/aparatus.png";
import bewear from "/assets/bewear.png";
export const services = [
  {
    title: "Node",
    description: `Node.js é um software de código aberto, multiplataforma.A principal
            característica do Node.js é sua arquitetura assíncrona e orientada
            por eventos`,
    svgUrl: "nodejs-logo-svgrepo-com.svg",
  },
  {
    title: "JavaScript",
    description: `JavaScript é uma linguagem de programação interpretada estruturada,
            de script em alto nível com tipagem dinâmica fraca e multiparadigma.`,
    svgUrl: "javascript-svgrepo-com.svg",
  },
  {
    title: "TypeScript",
    description: `TypeScript é uma linguagem de programação fortemente tipada que se
            baseia em JavaScript, oferecendo melhores ferramentas em qualquer
            escala.`,
    svgUrl: "typescript-svgrepo-com.svg",
  },
  {
    title: "ReactJs",
    description: `React é uma biblioteca front-end JavaScript de código aberto com
            foco em criar interfaces de usuário em páginas web.`,
    svgUrl: "react-svgrepo-com.svg",
  },
  {
    title: "NextJs",
    description: `Next.js é um framework React para construir aplicações web
            full-stack. Você usa componentes React para criar interfaces de
            usuário e Next.js para recursos adicionais e otimizações.`,
    svgUrl: "nextjs-svgrepo-com.svg",
  },
  {
    title: "VueJs",
    description: `Vue.js é um framework JavaScript de código-aberto, focado no
            desenvolvimento de interfaces de usuário e aplicativos de página
            única.`,
    svgUrl: "vue-svgrepo-com.svg",
  },
  {
    title: "Python",
    description:
      "Python é uma linguagem de programação de alto nível, de propósito geral, sendo usada para desenvolvimento web, ciência de dados, inteligência artificial, automação",
    svgUrl: "python-svgrepo-com.svg",
  },
  {
    title: "IA",
    description:
      " incorporação de modelos inteligentes em sistemas, softwares (ERP, CRM) e fluxos de trabalho existentes para automatizar tarefas, aumentando a eficiência operacional e reduzindo custos",
    svgUrl: "ai-svgrepo-com.svg",
  },
  {
    title: "Docker",
    description:
      "Docker é uma plataforma de código aberto que usa contêineres para empacotar, distribuir e executar aplicações, incluindo código, bibliotecas e dependências, garantindo que funcionem de forma consistente em qualquer ambiente.",
    svgUrl: "docker-svgrepo-com.svg",
  },
  {
    title: "Figma",
    description: `Figma é um editor gráfico de vetor e prototipagem de projetos de
            design baseado principalmente no navegador web.`,
    svgUrl: "figma-svgrepo-com.svg",
  },
];

export const projects = [
  {
    title: "Finance AI",
    description: "Projeto em NextJS de um sistema de finanças.",
    imgUrl: finance_image,
    link: "https://finance-ai-khaki.vercel.app/login",
  },
  {
    title: "Projeto Loja TNS Imports",
    description: "Projeto com uma loja web de acessórios de computadores!",
    imgUrl: web_store,
    link: "https://fsw-store-oxn5.vercel.app/",
  },
  {
    title: "Ordem dos Livros",
    description: "Projeto que demostra a ordem Cronológica dos livros",
    imgUrl: ordem_livros,
    link: "https://ordemlivrostn.netlify.app/series/harry-potter",
  },
  {
    title: "Trips",
    description: "Uma plataforma de busca e reservas de viagens estilo AirBNB ",
    imgUrl: trips,
    link: "https://fsw-trips-tau.vercel.app/",
  },
  {
    title: "Ecommerce Bewear",
    description: "Ecommerce de Roupas e acessórios!",
    imgUrl: bewear,
    link: "https://bewear-ten.vercel.app/",
  },
  {
    title: "Mcdonald's",
    description: "uma plataforma de pedidos de lanches replica do McDonald's ",
    imgUrl: mcdonalds,
    link: "https://mcdonalds-fecf.vercel.app/fsw-donalds",
  },
  {
    title: "Filmes",
    description: "Web de livraria de filmes completo consumindo api",
    imgUrl: tn_lib,
    link: "https://nevesfilmes-lib.vercel.app/",
  },
  {
    title: "TN Barbeshop",
    description: "Um SaaS de Barbearia com integração com chatBot!",
    imgUrl: aparatus,
    link: "https://github.com/tassioNS9/aparatus",
  },

  {
    title: "USF Sistemas",
    description: `Sistema web de indicadores de saúde para mulheres desenvolvido
              como trabalho de TCC`,
    imgUrl: usf_image,
    link: "https://github.com/tassioNS9/usf-frontend",
  },
];
