import Link from "next/link";
import { FiGift, FiHome, FiPhone, FiUsers } from 'react-icons/fi';

const Navigation = () => {
    return (
        <section>
            <h4>Navegacion</h4>
            <Link href='/'>
                <FiHome />
                <p>INICIO</p>
            </Link>
            <Link href='/contact'>
                <FiPhone />
                <p>CONTACTO</p>
            </Link>
            <Link href='/pricing'>
                <FiGift />
                <p>PLANES</p>
            </Link>
            <Link href='/aboutus'>
                <FiUsers />
                <p>NOSOTROS</p>
            </Link>
        </section>
    )
}

export default Navigation