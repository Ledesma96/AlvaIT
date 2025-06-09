'use client'
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';

const services = {
    'web-development': {
        title: 'Desarrollo Web',
        description:
        'Creamos sitios web rápidos, seguros y optimizados, diseñados para que tu negocio crezca en el entorno digital. Nos enfocamos en rendimiento, accesibilidad y escalabilidad.',
        image: '/desarrollo-web.jpg',
        features: [
        'Diseño responsive',
        'Integración de sistemas',
        'Webs autoadministrables',
        'Optimización de velocidad',
        ],
    },
    'application-development': {
        title: 'Desarrollo de Aplicaciones',
        description:
        'Aplicaciones móviles y web desarrolladas a medida con tecnología moderna. Desde MVP hasta aplicaciones completas para Android, iOS y web.',
        image: '/desarrollo-apps.jpg',
        features: [
        'Apps nativas y multiplataforma',
        'Diseño UX/UI profesional',
        'Integración con APIs y servicios',
        'Soporte y mantenimiento continuo',
        ],
    },
    'web-design': {
        title: 'Diseño Web',
        description:
        'Diseños modernos, atractivos y alineados con tu marca. Logra captar la atención de tu audiencia y genera confianza desde el primer clic.',
        image: '/diseno-web.jpg',
        features: [
        'Identidad visual única',
        'Prototipado y wireframes',
        'Adaptación a dispositivos móviles',
        'Optimización para conversión',
        ],
    },
    'seo-optimization': {
        title: 'Optimización SEO',
        description:
        'Aumentamos tu visibilidad en Google. Estrategias SEO on-page y off-page para atraer tráfico orgánico y mejorar tu posicionamiento.',
        image: '/seo.jpg',
        features: [
        'Auditoría SEO completa',
        'Optimización de contenido',
        'Estrategias de linkbuilding',
        'Análisis de competencia',
        ],
    },
};

export default function ServicePage() {
    const params = useParams()
    const category = params.category
    const service = services[category];

    if (!service) return notFound();

    return (
        <section className='servicePage'>
        <div className='imageContainer'>
            <Image
            src={service.image}
            alt={service.title}
            layout="fill"
            objectFit="cover"
            priority
            />
            <div className='overlay'></div>
            <h1 className='title'>{service.title}</h1>
        </div>

        <div className='content'>
            <p className='description'>{service.description}</p>

            <ul className='features'>
            {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
            ))}
            </ul>
        </div>
        </section>
    );
}
