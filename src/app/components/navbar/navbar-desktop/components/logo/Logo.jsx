import Link from "next/link"

const Logo = () => {
    return (
        <Link href='/' className="container-logo w-[10%]">
            <img className="w-full" src="/logo.png" alt='logo AlvaIT'/>
        </Link>
    )
}

export default Logo