import Image from "next/image"

const Logo = () => {
    return (
        <div className="container-logo">
            <Image src="/logo.png" width={60} height={30} alt="logo alva it" />
            <p>Futuro digital en tus manos.</p>
        </div>
    )
}

export default Logo