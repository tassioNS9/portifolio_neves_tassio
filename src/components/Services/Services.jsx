import "./Services.css";
export default function Services() {
  const services = [
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
        "Python é uma linguagem de programação de alto nível, de propósito geral, conhecida por sua sintaxe simples e legível, sendo usada para desenvolvimento web, ciência de dados, inteligência artificial, automação, desenvolvimento de software e muito mais",
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
  return (
    <section className="services" id="services">
      <h2 className="heading">
        Nossos <span>Serviços</span>
      </h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.title} className="services-box">
            <img src={service.svgUrl} alt={service.title} width={45} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
