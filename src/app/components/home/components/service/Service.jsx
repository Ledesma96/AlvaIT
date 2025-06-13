import Image from "next/image"
import Link from "next/link"

const Service = () => {
    return (
        <main className="home-main">
            <h2>S<span>ervicios</span></h2>
            <div>
                <Link href='/services/web-design'>
                    <Image src='/servicios-diseno-web-ui-ux-programacion.png' width={80} height={80} alt="Logo diseño ux/ui"/>
                    <h3>Diseño web</h3>
                    <p>Creamos interfaces modernas, intuitivas y responsivas que conectan con tus usuarios y potencian tu presencia digital desde el primer clic.</p>
                </Link>
                <Link href='/services/web-development'>
                    <Image src='/3476582.png' width={80} height={80} alt="Logo desarrollo web"/>
                    <h3>Desarrollo web</h3>
                    <p>Desarrollamos sitios web rápidos, seguros y escalables con tecnologías modernas que garantizan rendimiento y facilidad de mantenimiento.</p>
                </Link>
                <Link href='/services/application-development'>
                    <Image src='/5738077.png' width={80} height={80} alt="Logo diseño ux/ui"/>
                    <h3>Desarrollo de aplicaciones</h3>
                    <p>Transformamos tus ideas en aplicaciones móviles y web eficientes, intuitivas y listas para crecer junto con tu negocio.</p>
                </Link>
                <Link href='/services/seo-optimization'>
                    <Image src='/1000_F_302893333_DUSQXVlpzqgSuFHlA7BzB40dn3ZoNH6Q.png' width={100} height={80} alt="Logo diseño ux/ui"/>
                    <h3>Optimizacion de SEO</h3>
                    <p>Mejoramos tu visibilidad en buscadores mediante prácticas SEO efectivas que atraen tráfico orgánico y aumentan tu alcance digital.</p>
                </Link>
            </div>
        </main>
    )
}

export default Service 