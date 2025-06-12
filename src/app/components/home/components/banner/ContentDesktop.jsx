import Link from "next/link"

const ContentDesktop = () => {
    return (
        <div className="container-content-desktop">
            <h1>
            Transformamos Ideas <br /> en Experiencias Digitales.
            </h1>
            <p className="text-description">
            En <span className="alva">Alva</span>, combinamos diseño y desarrollo a medida
            para que tu proyecto sea más que una página web: sea una herramienta poderosa para tu negocio.
            <br /> <span className="">Futuro digital en tus manos.</span>
            </p>
            <div className="container-btns">
                <Link href='https://wa.me/+5491164323570?text=Hola,%20estoy%20interesado%20en%20realizar%20mi%20proyecto.' target="_blank">
                    Empezar proyecto
                </Link>
                <Link href='/pricing'>
                    Ver planes
                </Link>
            </div>
        </div>
    )
}

export default ContentDesktop