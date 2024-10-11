import React, { useState } from "react";
import "./formulario.css";

export const Formulario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão de recarregar a página

        const formData = {
            name: nome,
            email: email,
            subject: assunto,
            message: mensagem,
        };

        // Enviando os dados via fetch
        fetch('http://localhost/ArcaEmbrioes/utils/email.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Falha no envio do formulário');
            }
        })
        .then((data) => {
            setStatus('Formulário enviado com sucesso!');
            console.log('Sucesso:', data);
        })
        .catch((error) => {
            setStatus('Erro ao enviar o formulário.');
            console.error('Erro:', error);
        });
    };

    return (
        <form className="container-formulario" onSubmit={handleSubmit}>
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
            {/* Exibe o status de envio do formulário */}
            {status && <p className="status-message">{status}</p>}
        </form>
    );
};
