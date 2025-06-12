import axios from "axios";

const sendMail = async (data) => {
    try {
        const response = await axios.post('https://alvait-nest.onrender.com/mailing/send-mail', data);
        
        if (response.data.success) {
        console.log('Correo enviado correctamente:', response.data.message);
        return { success: true, message: response.data.message };
        } else {
        console.warn('Hubo un problema al enviar el correo:', response.data.message);
        return { success: false, message: response.data.message };
        }
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return { success: false, message: 'Error al enviar el correo.' };
    }
};

export { sendMail };

