import { Menu } from "../../components/Menu"
import { Footer } from "../../components/Footer"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { Header } from '../../components/Header'

export const Detalhes = () => {

    const [personagem, setPersonagem] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({ data }) => {
                setPersonagem(data);
            })
    }, [id]);

    if(!personagem) return

    return (
        <>
            <Header />
            <div
                className="container mt-1"
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingTop: 20
                    }}
                >
                    <h1 
                        style={{
                            fontFamily: 'GetSchwifty',
                            fontSize: 46,
                            fontWeight: 500
                        }}
                    >
                        {personagem.name}
                    </h1>
                    
                    <div className="d-flex gap-2 mt-2">
                        <img 
                            src={personagem.image} 
                            alt="foto" 
                            style={{
                                border: '10px solid #0AB0C7',
                            }}
                        />
                        <div>
                            <p><strong>Status:</strong> {personagem.status}</p>
                            <p><strong>Espécie:</strong> {personagem.species}</p>
                            <p><strong>Gênero:</strong> {personagem.gender}</p>
                            <p><strong>Origem:</strong> {personagem.origin.name}</p>
                            <p><strong>Local:</strong> {personagem.location.name}</p>
                        </div>
                    </div>
                    
                </div>
                <hr />

                



            </div>

            <Footer />
        </>
    )
}