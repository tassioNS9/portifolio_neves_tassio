import "./Portifolio.css";
import web_store from "/assets/web-store-image.png";
import finance_image from "/assets/finance_image.png";
import ordem_livros from "/assets/ordem-livros.png";
import tn_lib from "/assets/tn_lib.png";
import usf_image from "/assets/usf_image.png";
import mcdonalds from "/assets/mcdonalds.png";
import trips from "/assets/trips.png";
import aparatus from "/assets/aparatus.png";
export default function Portifolio() {
  const projects = [
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
      description:
        "Uma plataforma de busca e reservas de viagens estilo AirBNB ",
      imgUrl: trips,
      link: "https://fsw-trips-tau.vercel.app/",
    },
    {
      title: "Mcdonald's",
      description:
        "uma plataforma de pedidos de lanches replica do McDonald's ",
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
  return (
    <section className="portifolio" id="portifolio">
      <h2 className="heading">
        Ultimos <span>Projetos</span>
      </h2>
      <div className="portifolio-container">
        {projects.map((project) => (
          <div key={project.title} className="portifolio-box">
            <img src={project.imgUrl} alt="finance_image" />
            <div className="portifolio-layer">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
