import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import './style.css'

export const Home = () => {

    const [cards, setCards] = useState([]);
    const [actualPage, setActualPage] = useState('');
    const [pages, setPages] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        axios.get(actualPage ? actualPage : 'https://rickandmortyapi.com/api/character')
            .then(({ data }) => {    
                setPages({ prev: data.info.prev, next: data.info.next });
                setCards(data.results);
                setLoading(false);
            })

    }, [actualPage])

    function handleChangePage(link) {
        setActualPage(link);
        setLoading(true);
    }

    return (
        <>
            <Header />

            <div
                className='container mb-5'
            >
                <h2 className='text-center mt-5 mb-5'>Conheça os personagens</h2>
                    
                {
                    loading ?
                        <h1>Carregando...</h1>
                    :
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
                            <div className='d-flex justify-content-between'>
                                <button
                                    className='btn btn-primary'
                                    onClick={() => handleChangePage(pages.prev)}
                                    style={{
                                        background: '#0AB0C7',
                                        border: '1px solid #0AB0C7',
                                        
                                    }}
                                > 
                                    Anterior
                                </button>
                                <button
                                    className='btn btn-primary'
                                    onClick={() => handleChangePage(pages.next)}
                                    style={{
                                        background: '#0AB0C7',
                                        border: '1px solid #0AB0C7'
                                    }}
                                > 
                                    Próxima
                                </button>
                            </div>
                        </div>

                    </div>
                }

            </div>

            <Footer />
        </>
    )
}