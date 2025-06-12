'use client';

import Link from "next/link";

const plans = [
  {
    name: 'Inicial',
    description: 'Presencia web básica para emprendedores.',
    features: [
      'Dominio .com por 1 año',
      'Hosting básico',
      'Hasta 3 páginas',
      'Diseño responsive',
      'Formulario de contacto',
      '1 mes de soporte',
    ],
    priceUSD: null,
    priceARS: null,
  },
  {
    name: 'Profesional',
    description: 'Web funcional para negocios en crecimiento.',
    features: [
      'Dominio .com o .com.ar',
      'Hosting 5GB',
      'Hasta 5 páginas',
      'Carrito básico',
      'Pasarelas de pago',
      'Panel de gestión',
      '3 meses de soporte',
    ],
    priceUSD: null,
    priceARS: null,
  },
  {
    name: 'Empresarial',
    description: 'Solución completa para empresas.',
    features: [
      'Dominio personalizado',
      'Hosting avanzado',
      'Páginas ilimitadas',
      'Carrito avanzado',
      'Pasarelas múltiples',
      'Panel completo',
      '6 meses de soporte',
    ],
    priceUSD: null,
    priceARS: null,
  },
];

export default function Prices() {
  return (
    <section className="pricing-section">
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-description">{plan.description}</p>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            {plan.priceUSD && plan.priceARS ? (
              <div className="plan-price">
                <span>${plan.priceUSD} USD</span>
                <span>${plan.priceARS.toLocaleString('es-AR')} ARS</span>
              </div>
            ) : (
              <Link href={`https://wa.me/+5491164323570?text=Hola,%20estoy%20interesado/a%20por%20el%20plan%20${plan.name}.`} className="plan-contacto" target="_blank">Consultar precio</Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
