import React from "react";
import "./formulario.css";

export const Formulario = () => {
    return(
        <div className="container-formulario"> 
            <div className="campo">
                <p className="label">Nome completo:</p>
                <input placeholder="seu nome..."/>
            </div>
            <div className="campo">
                <p className="label">E-mail:</p>
                <input placeholder="voce@gmail.com"/>

            </div>
            <div className="campo">
                <p className="label">Assunto:</p>
                <input placeholder="assunto..."/>

            </div>
            <div className="campo">
                <p className="label">Mensagem: </p>
                <input placeholder="mensagem"/>

            </div>
        </div>
    )
}