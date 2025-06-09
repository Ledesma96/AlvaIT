const { default: Image } = require("next/image")

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us">
            <h2>¿<span>Por qué elegirnos</span>?</h2>
            <div className="reasons">
                <section>
                    <div className="item">
                        <div>
                            <h4>Experiencia</h4>
                            <p>Contamos con profesionales experimentados en cada area.</p>
                        </div>
                        <Image src="/2303952.png" width={60} height={60} alt="Experiencia"/>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                            </svg>
                        </span>
                    </div>
                    <div className="item">
                        <div>
                            <h4>Calidad</h4>
                            <p>Código limpio, diseño moderno y enfoque en usabilidad.</p>
                        </div>
                        <Image src="/310831.png" width={60} height={60} alt="Calidad"/>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                            </svg>
                        </span>
                    </div>
                    <div className="item">
                        <div>
                            <h4>Soporte</h4>
                            <p>Acompañamiento constante y soporte post-lanzamiento.</p>
                        </div>
                        <Image src="/3203390.png" width={60} height={60} alt="Soporte"/>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                            </svg>
                        </span>
                    </div>
                </section>
                <div className="container-image">
                    <Image
                    src="/features.jpg"
                    fill
                    alt='Imagen'
                />
                </div>
                <section>
                    <div className="item">
                        <Image src="/912278.png" width={60} height={60} alt="Innovación"/>
                        <div>
                            <h4>Innovación</h4>
                            <p>Aplicamos las últimas tecnologías para ofrecer soluciones modernas y eficientes.</p>
                        </div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                            </svg>
                        </span>
                    </div>
                    <div className="item">
                        <Image src="/png-transparent-computer-icons-communication-logo-font-communication-miscellaneous-computer-network-text.png" width={60} height={60} alt="Comunicación"/>
                        <div>
                            <h4>Comunicación</h4>
                            <p>Escuchamos a nuestros clientes y mantenemos una comunicación clara y constante.</p>
                        </div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                            </svg>
                        </span>
                    </div>
                    <div className="item">
                        <Image src="/1589690.png" width={60} height={60} alt="Resultados"/>
                        <div>
                            <h4>Resultados</h4>
                            <p>Nos enfocamos en lograr resultados concretos que generen valor para tu negocio.</p>
                        </div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                            </svg>
                        </span>
                    </div>
                </section>
            </div>
        </section>
    )
}
export default WhyChooseUs