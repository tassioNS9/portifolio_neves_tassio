import "./About.css";
import logo from "/assets/logo-about.png";
export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={logo} alt="logo-about" />
      </div>
      <div className="about-content">
        <h2 className="heading">
          Sobre <span>Mim</span>
        </h2>
        <h3>Desenvolvedor FullStack!</h3>
        <p>
          Bacharel em Ciências Exatas e Tecnológicas e Engenharia da Computação,
          desenvolvedor Full Stack, com mais de 4 anos de experiência.
          Desenvolvo aplicações que vão do backend com APIs bem estruturadas ao
          frontend, sempre preocupado com organização, principios de SOLID,
          desempenho e experiência do usuário. Gosto de entender o problema como
          um todo antes de escrever a primeira linha de código. Meu objetivo é
          evoluir continuamente como profissional de tecnologia, contribuindo
          para projetos desafiadores e inovadores, especialmente em ambientes
          que valorizam arquitetura, qualidade de software e impacto real. Se
          você estiver procurando um Desenvolvedor Full Stack dedicado e com
          experiência em JS, TS,React.js, Node, Next.js ficarei feliz em
          contribuir com minhas habilidades e conhecimentos para sua equipe.
        </p>
      </div>
    </section>
  );
}
