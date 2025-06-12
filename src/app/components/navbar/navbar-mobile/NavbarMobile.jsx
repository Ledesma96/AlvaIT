import Image from "next/image"
import Link from "next/link"
import { Options } from "./components"

const NavbarMobile = () => {
    return (
        <div className="navbar_mobile">
            <Link href='/' className="container_logo">
                <Image
                    src="/logo.png"
                    width={100}
                    height={45}
                    alt="Logo tipo de alva it"
                />
            </Link>
            <Options />
        </div>
    )
}

export default NavbarMobile