import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
const Social = () => {
    const styles = {
        instagram: {
            background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
            color: "white",
            borderRadius: "6px",
        }
    };
    
    return (
        <section>
            <h4>Seguinos</h4>
            <Link href='/'>
                <CiInstagram style={styles.instagram}/>
            </Link>
        </section>
    )
}

export default Social