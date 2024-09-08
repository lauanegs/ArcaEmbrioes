import "./contatos.css"
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

export const Contatos = () => {
    return(
        <div className="container-contatos">
            <div className="container-contato">
                <FaMapLocationDot size="60px" className="icon"/>
                <p  className="nome-contato">Endereço</p>
            </div>
            <div className="container-contato ">
                <MdEmail size="60px" className="icon"/>
                <p className="nome-contato">E-mail</p>
            </div>
            <div className="container-contato">
                <FaRegClock size="60px" className="icon"/>
                <p  className="nome-contato">Horário</p>
            </div>
            <div className="container-contato">
                <BsTelephoneFill size="60px" className="icon"/>
                <p  className="nome-contato">Telefone</p>
            </div>
        </div>
    )
}