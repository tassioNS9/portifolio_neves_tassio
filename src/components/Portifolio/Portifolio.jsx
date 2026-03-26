import "./Portifolio.css";
import { projects } from "../../constants/constants";

export default function Portifolio() {
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
