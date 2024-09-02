import './valores.css'
import CardValores from './card-valores';

const Valores = () => {
    return (
        <>
        <h1>Nossos valores</h1>
        <p>Somos gratos a todos que estão conosco nessa jornada. O crescimento da empresa é fruto de um trabalho conjunto, nosso e dos parceiros que nos escolhem como prestadora de serviço.</p>
        <div className='lista-cards'>
            <CardValores titulo="Titulo" texto="Texto"/>
            <CardValores titulo="Titulo" texto="Texto"/>
            <CardValores titulo="Titulo" texto="Texto"/>

            <CardValores titulo="Titulo" texto="Texto"/>
            <CardValores titulo="Titulo" texto="Texto"/>
            <CardValores titulo="Titulo" texto="Texto"/>

        </div>
        </>
    )
}


export default Valores;