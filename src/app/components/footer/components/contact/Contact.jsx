import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Contact = () => {
    return (
        <section>
            <h4>Contactanos</h4>
            <Link href="tel:+5491164323570" target="_blank">
                <FaPhoneAlt />
                <p>+941164323570</p>
            </Link>
            <Link href="mailto:Grupoalvait@gmail.com" target="_blank">
                <MdOutlineEmail />
                <p>Grupoalvait@gmail.com</p>
            </Link>
        </section>
    )
}

export default Contact