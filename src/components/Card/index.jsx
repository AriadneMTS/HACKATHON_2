import { Link } from 'react-router-dom'

export const Card = ({ personagem }) => {
    function verDetalhes(id) {

    }

    return (
        <div className="col-4">
            <div
                className='card text-center'
                key={personagem.index}
                style={{
                    width: '18rem'
                }}
            >
                <div
                    className='card-body'
                >
                    <h5 className='card-title'>
                        {personagem.name}
                    </h5>
                    <img src={personagem.image} />
                    <Link
                        to={`/detalhes/${personagem.id}`}
                    >
                        Detalhes
                    </Link>

                </div>

            </div>
        </div>
    )
}