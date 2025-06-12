'use client'
import { sendMail } from "@/app/api/email.api";
import { Loader } from "@/app/components";
import { showToast } from "nextjs-toast-notify";
import { useState } from "react";

const Form = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !message || !phone) {
            showToast.error("Por favor completa todos los campos", {
                duration: 4000,
                progress: true,
                position: "top-right",
                transition: "swingInverted",
                icon: '',
                sound: true,
            });
            return;
        }
        const data = { name, phone: parseInt(phone), email, message };
        setLoading(true)
        try {
            const result = await sendMail(data);
            if (result.success) {
                showToast.success("Su consulta fue realizada con éxito", {
                    duration: 4000,
                    progress: true,
                    position: "top-right",
                    transition: "bounceIn",
                    icon: '',
                    sound: true,
                });
                setName('');
                setPhone('');
                setEmail('');
                setMessage('');
            } else {
                showToast.error("Error al enviar consulta", {
                    duration: 4000,
                    progress: true,
                    position: "top-right",
                    transition: "swingInverted",
                    icon: '',
                    sound: true,
                });
            }
        } catch (error) {
            showToast.error("Ha ocurrido un error, por favor inténtelo más tarde", {
                duration: 4000,
                progress: true,
                position: "top-right",
                transition: "swingInverted",
                icon: '',
                sound: true,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="container-form">
            <h4>Realiza tu consulta</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                    <label className={`${name && 'up'}`}>Nombre</label>
                </div>
                <div>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <label className={`${phone && 'up'}`}>Teléfono</label>
                </div>
                <div>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className={`${email && 'up'}`}>Email</label>
                </div>
                <div>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                    <label className={`${message && 'up'}`}>Mensaje...</label>
                </div>
                <button type="submit" className="btn">
                    Enviar
                </button>
            </form>
            {loading && <Loader text={'enviando...'}/>}
        </main>
    );
};

export default Form;
