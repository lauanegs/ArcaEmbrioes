import './valores.css';

const Valores = () => {
    return (
        <>
            
            <div className='lista-cards'>
                <div className='coluna'>
                    <h2>Valores</h2>
                    <p>
                        Honestidade<br />
                        Transparência<br />
                        Credibilidade<br />
                        Qualidade<br />
                        Valorização de pessoas<br />
                        Comprometimento
                    </p>
                </div>
                <div className='separator'></div>
                <div className='coluna'>
                    <h2>Missão</h2>
                    <p>Fornecer produtos e serviço individualizado de qualidade, sempre utilizando os melhores padrões da biotecnologia animal, garantindo a máxima satisfação dos nossos clientes.</p>
                </div>
                <div className='separator'></div>
                <div className='coluna'>
                    <h2>Visão</h2>
                    <p>Ser referência na área de fertilização in vitro de bovinos, criar uma rede consolidada de clientes e contribuir de uma forma eficiente para o crescimento dos mesmos, a fim de perpetuar a empresa.</p>
                </div>
            </div>
        </>
    );
}

export default Valores;
