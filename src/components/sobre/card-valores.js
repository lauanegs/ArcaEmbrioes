import './valores.css'

const CardValores = ({titulo, texto}) => {
    return(
        <div className="card">
            <h1>{titulo}</h1>
            <p>{texto}</p>
        </div>
    )
}

export default CardValores;