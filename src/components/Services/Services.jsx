import "./Services.css";
import { services } from "../../constants/contants";
export default function Services() {
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
