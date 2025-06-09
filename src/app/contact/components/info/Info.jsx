import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Info = () => {
    return (
        <div className="container-info">
            <div className="item">
                <div className="circle">
                    <FaLocationDot color="#003432"/>
                </div>
                <div className="info">
                    <h4>Ubicacion</h4>
                    <p>Buenos Aires - Argentina</p>
                </div>
            </div>
            <div className="item">
                <div className="circle">
                    <FaPhoneAlt color="#003432"/>
                </div>
                <div className="info">
                    <h4>Telefono</h4>
                    <p>1164323570</p>
                </div>
            </div>
            <div className="item">
                <div className="circle">
                    <MdOutlineEmail color="#003432"/>
                </div>
                <div className="info">
                    <h4>Email</h4>
                    <p>grupoalvait@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Info