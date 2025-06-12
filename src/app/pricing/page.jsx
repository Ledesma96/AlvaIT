import { metadata } from "../layout";
import { Prices, Title } from "./components";
metadata.title = 'Planes de Desarrollo | Soluciones a Medida para tu Negocio';
metadata.description = 'Conoce nuestros planes de desarrollo: aplicaciones móviles, sitios web, estrategias SEO y diseño UX/UI. Soluciones adaptadas a tus necesidades y presupuesto.';
metadata.keywords = 'planes desarrollo de software, precios desarrollo web, tarifas aplicaciones móviles, planes SEO, diseño UX/UI, soluciones digitales a medida, agencia de software'
const Pricing = () => {
    return (
        <>
            <Title />
            <Prices />
        </>
    )
}

export default Pricing