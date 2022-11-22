import { Link } from 'react-router-dom'

export const Card = ({ personagem }) => {

    return (
        <div className="col-3 mb-5">
            <div
                className='card text-start h-100'
                key={personagem.index}
                style={{
                    width: '18rem'
                }}
            >
                <img 
                    src={personagem.image} 
                    alt='Imagem do personagem'
                    className='card-img-top'
                />
                <div
                    className='card-body'
                >
                    <h4 
                        className='card-title'
                    >
                        {personagem.name}
                    </h4>
                    <p className="card-text">Status: {personagem.status}</p>
                    <p className="card-text">Specie: {personagem.species}</p>
                    <p className="card-text">Gender: {personagem.gender}</p>
                    
                    <Link
                        to={`/detalhes/${personagem.id}`}
                        className='btn btn-primary w-100'
                        style={{
                            background: '#0AB0C7',
                            border: '1px solid #0AB0C7',
                            
                        }}
                    >
                        Detalhes
                    </Link>

                </div>

            </div>
        </div>
    )
}