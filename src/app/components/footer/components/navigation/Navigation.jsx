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
            <Link href='/'>
                <FiPhone />
                <p>CONTACTO</p>
            </Link>
            <Link href='/'>
                <FiGift />
                <p>PLANES</p>
            </Link>
            <Link href='/'>
                <FiUsers />
                <p>NOSOTROS</p>
            </Link>
        </section>
    )
}

export default Navigation