import { FaCode, FaLightbulb, FaPaintBrush, FaUsers } from 'react-icons/fa';
import { metadata } from "../layout";
metadata.title = 'Nosotros | Tu Socio en Transformación Digital';
metadata.description = 'Somos un equipo de desarrolladores, diseñadores y expertos en SEO apasionados por crear soluciones digitales que marcan la diferencia. Conocé nuestra historia y valores.';
metadata.keywords = 'nosotros agencia de software, equipo de desarrollo, desarrolladores web, expertos en SEO, diseñadores UX/UI, innovación tecnológica, transformación digital'

export default function AboutSection() {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-image">
                    <img src="/team-work.jpg" alt="Equipo de desarrollo y diseño" />
                </div>
                <div className="about-info">
                    <h2 className="about-title">Quiénes somos</h2>
                    <p className="about-description">
                    Somos una agencia digital especializada en el desarrollo de software a medida y diseño UI/UX, comprometida con la creación de soluciones tecnológicas que no solo funcionan de manera eficiente, sino que también ofrecen experiencias visuales y de usuario excepcionales.
                    <br />
                    Combinamos la lógica del desarrollo con la creatividad del diseño para construir productos digitales sólidos, escalables y centrados en las necesidades reales de las personas. Nos enfocamos en entender profundamente a cada cliente y su público objetivo para proponer estrategias inteligentes, usables y alineadas con sus objetivos de negocio.
                    <br />
                    Nuestro equipo está formado por profesionales multidisciplinarios: desarrolladores full stack que dominan las últimas tecnologías y diseñadores que priorizan la usabilidad, la accesibilidad y la identidad visual en cada interfaz.
                    <br />
                    Ya sea una app, una plataforma web o un sitio institucional, nuestro enfoque integral garantiza resultados funcionales, atractivos y listos para crecer con tu proyecto.
                    </p>
                </div>
                    <ul className="about-features">
                    <h3 className="features-title">¿Por qué elegirnos?</h3>
                        <li><FaCode className="icon" /> Desarrollo a medida para empresas y emprendedores</li>
                        <li><FaPaintBrush className="icon" /> Diseño UI/UX centrado en el usuario</li>
                        <li><FaLightbulb className="icon" /> Soluciones creativas, ágiles e innovadoras</li>
                        <li><FaUsers className="icon" /> Equipo multidisciplinario con visión integral</li>
                    </ul>
            </div>
        </section>
    );
}
