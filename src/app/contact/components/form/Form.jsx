'use client'

import { useState } from "react";

const Form = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <main className="container-form">
            <h4>Realiza tu consulta</h4>
            <form>
                <div>
                    <input value={name} onChange={(e) => setName(e.target.value)}/>
                    <label className={`${name != '' && 'up'}`}>Nombre</label>
                </div>
                <div>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <label className={`${phone != '' && 'up'}`}>Telefono</label>
                </div>
                <div>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label className={`${email != '' && 'up'}`}>Email</label>
                </div>
                <div>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)}/>
                    <label className={`${message != '' && 'up'}`}>Mensaje...</label>
                </div>
                <div className="btn">
                    <p>Enviar</p>
                </div>
            </form>
        </main>
    )
}

export default Form