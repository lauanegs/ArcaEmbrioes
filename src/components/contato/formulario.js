import React, { useState } from "react";
import "./formulario.css";

export const Formulario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');

    return (
        <form className="container-formulario" action="../email.php" method="POST">
            <div className="campo">
                <p className="label">Nome completo:</p>
                <input 
                    type="text" 
                    name="name" 
                    required 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                />
            </div>
            <div className="campo">
                <p className="label">E-mail:</p>
                <input 
                    type="email" 
                    name="email" 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div className="campo">
                <p className="label">Assunto:</p>
                <input 
                    type="text" 
                    name="subject" 
                    required 
                    value={assunto} 
                    onChange={(e) => setAssunto(e.target.value)} 
                />
            </div>
            <div className="campo">
                <p className="label">Mensagem: </p>
                <textarea 
                    id="mensagem" 
                    name="message" 
                    maxLength={250} 
                    required 
                    value={mensagem} 
                    onChange={(e) => setMensagem(e.target.value)} 
                />
            </div>
            <button className="btn-form" type="submit">Enviar</button>
        </form>
    );
};
