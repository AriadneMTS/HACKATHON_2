import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { Menu } from './../../components/Menu'
import banner from './../../imagens/banner.jpg'
import './style.css'

export const Home = () => {

    const [cards, setCards] = useState([])

    useEffect(() => {

        axios.get('https://rickandmortyapi.com/api/character')
            .then((resposta) => {                
                setCards(resposta.data.results)
            })

    }, [])

    return (
        <>
            <Menu paginaAtual={"Home"} />
            <div
                className='divImageHome'
            >
                <img
                    className='imgHome'
                    src={banner}
                />
            </div>

            <div
                className='container'
            >
                <h4 className='text-center'>Porque nos escolher?</h4>
                <p className='text-center'>Conheça nossos serviços</p>

                <div
                    className='d-flex justify-content-around'
                >
                
                <div className="container text-center">
                    <div className="row">
                        
                    {
                        cards.map((objeto, index) => {
                            return (
                               <Card personagem={{...objeto, index}} />
                            )
                        })
                    }

                    </div>
                </div>

                    


                </div>

            </div>

            <Footer />
        </>
    )
}