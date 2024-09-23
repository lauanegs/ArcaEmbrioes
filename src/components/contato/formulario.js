import React from "react";
import "./formulario.css";

export const Formulario = () => {
    return(
        <form className="container-formulario"> 
            <div className="campo">
                <p className="label">Nome completo:</p>
                <input required/>
            </div>
            <div className="campo">
                <p className="label">E-mail:</p>
                <input required/>

            </div>
            <div className="campo">
                <p className="label">Assunto:</p>
                <input required/>

            </div>
            <div className="campo">
                <p className="label">Mensagem: </p>
                <textarea id="mensagem" maxLength={250}/>

            </div>
            <button className="btn-form">Enviar mensagem</button>
        </form>
    )
}