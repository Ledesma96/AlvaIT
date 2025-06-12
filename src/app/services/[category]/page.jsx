import { metadata } from "../layout";
import ServicePage from "./components/ServicePage";
metadata.title = 'Servicios | Desarrollo Web, Apps Móviles, SEO y Diseño UX/UI';
metadata.description = 'Ofrecemos desarrollo de aplicaciones móviles, sitios web personalizados, posicionamiento SEO y diseño UX/UI enfocado en la experiencia del usuario. Todo lo que tu proyecto necesita en un solo lugar.';
metadata.keywords = 'servicios desarrollo de software, desarrollo web, aplicaciones móviles, posicionamiento SEO, diseño UX/UI, agencia de desarrollo, soluciones digitales, programación a medida, experiencia de usuario'

const page = () => {
    return (
        <ServicePage />
    )
}

export default page