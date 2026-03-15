import "./About.css";
import logo from "/public/assets/logo.jpg";
export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={logo} alt="logo" />
      </div>
      <div className="about-content">
        <h2 className="heading">
          Sobre <span>Mim</span>
        </h2>
        <h3>Desenvolver FullStack!</h3>
        <p>
          Sou um engenheiro de software com foco em desenvolvimento full stack,
          apaixonado por construir soluções escaláveis, modernas e bem
          arquitetadas. Me apaixonei por programação durante a pandemia onde
          pude me dedicar com mais facilidade aos estudos, com isso pude me
          destacar na faculdade abrindo para minha uma oportunidade como
          bolsista em um projeto onde pude aprimorar ainda mais meus
          conhecimentos além de ajudar meus colegas durante o projeto. Percebi
          que podia personalizar qualquer coisa apenas escrevendo código.
        </p>
      </div>
    </section>
  );
}
