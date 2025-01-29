import './Home.css'
import logo_home from "/public/assets/logo-home.png" ;
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Home() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Desenvolvedor Web", "Desenvolvedor FullStack", ],

      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop:true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

    return (
        <section className='home' id='home'>
            <div className="home-content">
                <h3>Olá, meu nome é</h3>
                <h1>Tassio Neves</h1>
                <h3>E sou um <span ref={el}>Desenvolvedor Web</span></h3>
                <p>Bacharel em Engenharia de computação na Universidade Federal do Recôncavo da Bahia.</p>
                <div className="social-media">
                    <a  href="https://www.facebook.com/tassions" target='_blank' rel='noreferrer' ><i className='bx bxl-facebook'></i></a>
                    <a href="https://www.instagram.com/tassio.neves/"  target='_blank'><i className='bx bxl-instagram-alt'></i></a>
                    <a href="https://www.linkedin.com/in/tassio-neves-santos-51aa59180/"  target='_blank'><i className='bx bxl-linkedin'></i></a>
                </div>
                <a href="download/CurriculoTassioNeves2024.pdf" className='btn' download="Curriculo Tassio Neves">Download CV</a>
            </div>

            <div className="home-img">
                <img src={logo_home} alt="logo-home"/>
            </div>
        </section>
    )
}