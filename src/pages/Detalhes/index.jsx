import { Menu } from "../../components/Menu"
import { Footer } from "../../components/Footer"
import { useCallback } from "react"
import { useRef } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { Header } from '../../components/Header'

export const Detalhes = () => {

    const [personagem, setPersonagem] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({ data }) => {
                setPersonagem(data);
            })
    }, [id]);

    return (
        <>
            <Header />
            <div
                className="container"
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
                    
                    <img src={personagem.image} alt="foto" />
                </div>
                <hr />

                



            </div>

            <Footer />
        </>
    )
}