import { metadata } from "@/app/layout";
import { Form, Info } from "./components";
metadata.title = 'Contacto | Hablemos sobre tu proyecto digital';
metadata.description ='¿Listo para potenciar tu negocio? Escríbenos y te ayudaremos a crear soluciones digitales a medida: apps, sitios web, SEO y diseño UX/UI.';
metadata.keywords = 'contacto desarrollo de software, asesoría tecnológica, presupuesto apps, soluciones digitales, contacto agencia, desarrollo web, optimización SEO, diseño UX/UI'

const page = () => {
  return (
    <div className="container-contact">
      <Info />
      <Form />
    </div>
  )
}

export default page