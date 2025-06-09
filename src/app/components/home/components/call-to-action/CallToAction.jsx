import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>¿Listo para llevar tu proyecto al siguiente nivel?</h2>
        <p>Transforma tus ideas en realidad digital con <strong>Alva</strong>.</p>
        <Link href="/contacto" className="cta-button">Contáctanos</Link>
      </div>
    </section>
  );
};

export default CallToAction;
