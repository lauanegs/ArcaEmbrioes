import './texto.css';
import laboratorio from '../../assets/laboratorio.png'




const Texto = () => {
    return(
        <div className='texto-container'>
            
            <div className='texto'>
                <p>Localizado no município de Patos de Minas, Minas Gerais, o laboratório ARCA surgiu do consenso entre técnicos e produtores sobre a necessidade de biotecnologias reprodutivas e pessoas capacitadas mais próximas às propriedades da região. Nosso foco é gerar valor aos nossos clientes, fornecendo um atendimento personalizado, a um valor justo, de modo a obter embriões de qualidade e altas taxas de concepção.

                ARCA EMBRIÕES, melhorando o AGORA.
                </p>
            </div>

            <div class="imagem">
                <img src={laboratorio} alt='Laboratório' width="750" height="750"/>
            </div>

        </div>


    )
}

export default Texto;