import "./contatos.css"
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

export const Contatos = () => {
    return (
        <div className="container-contatos">
            <div className="contato">
                <div className="header-contato">
                    <FaMapLocationDot size="60px" className="icon" />
                    <h3>Endereço</h3>
                </div>
                <p className="nome-contato">R. José Alves Coelho, 454 - Loja 1 - Aurélio Caixeta, <br/>
                Patos de Minas - MG, 38702-070
                
                </p>
            </div>
            <div className="contato ">
                <div className="header-contato">
                    <MdEmail size="60px" className="icon" />
                    <h3>E-mail</h3>
                </div>
                <p className="nome-contato">arca@gmail.com.br</p>
            </div>
            <div className="contato">
                <div className="header-contato">
                    <FaRegClock size="60px" className="icon" />
                    <h3>Horário</h3>
                </div>
                <p className="nome-contato">Segunda à sexta:
                    07:00 às 16:00
                    <br/>
                    Sábado: 07:00 às 11:00</p>
            </div>
            <div className="contato">
                <div className="header-contato">
                    <BsTelephoneFill size="60px" className="icon" />
                    <h3>Telefone</h3>
                </div>
                <p className="nome-contato">(34) 99194-6309</p>
            </div>
        </div>
    )
}