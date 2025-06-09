import Image from "next/image"
import { Options } from "./components"

const NavbarMobile = () => {
    return (
        <div className="navbar_mobile">
            <div className="container_logo">
                <Image
                    src="/logo.png"
                    width={100}
                    height={45}
                    alt="Logo tipo de alva it"
                />
            </div>
            <Options />
        </div>
    )
}

export default NavbarMobile