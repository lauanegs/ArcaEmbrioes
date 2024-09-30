import React, { useState } from "react";
import "./formulario.css";

export const Formulario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('./envia_email.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                nome,
                email,
                assunto,
                mensagem
            })
        });

        const result = await response.text();
        alert(result); // Exibe o resultado da resposta do PHP
    };

    return (
        <form className="container-formulario" onSubmit={handleSubmit}> 
            <div className="campo">
                <p className="label">Nome completo:</p>
                <input 
                    type="text" 
                    required 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                />
            </div>
            <div className="campo">
                <p className="label">E-mail:</p>
                <input 
                    type="email" 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div className="campo">
                <p className="label">Assunto:</p>
                <input 
                    type="text" 
                    required 
                    value={assunto} 
                    onChange={(e) => setAssunto(e.target.value)} 
                />
            </div>
            <div className="campo">
                <p className="label">Mensagem: </p>
                <textarea 
                    id="mensagem" 
                    maxLength={250} 
                    required 
                    value={mensagem} 
                    onChange={(e) => setMensagem(e.target.value)} 
                />
            </div>
            <button className="btn-form" type="submit">Enviar mensagem</button>
        </form>
    );
};
