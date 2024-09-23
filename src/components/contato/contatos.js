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
                <p className="nome-contato">Avenida Aldo Borges Leão, Km 5, S/N. Zona rural de Uberlândia-MG,
                    <br/> saída para o Prata-MG (MG-497), próximo ao Oleoduto.</p>
            </div>
            <div className="contato ">
                <div className="header-contato">
                    <MdEmail size="60px" className="icon" />
                    <h3>E-mail</h3>
                </div>
                <p className="nome-contato">embriovita@ embriovita.com.br</p>
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
                <p className="nome-contato">(34) 99260-1603</p>
            </div>
        </div>
    )
}