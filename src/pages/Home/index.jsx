import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import './style.css'

export const Home = () => {

    const [cards, setCards] = useState([]);
    const [page, setPage] = useState('');
    const [prevPage, setPrevPage] = useState('');
    const [nextPage, setNextPage] = useState('');

    useEffect(() => {

        axios.get(page ? page : 'https://rickandmortyapi.com/api/character')
            .then(({ data }) => {    
                setPrevPage(data.info.prev);
                setNextPage(data.info.next); 
                setCards(data.results)
            })

    }, [page])

    return (
        <>
            <Header />

            <div
                className='container mb-5'
            >
                <h2 className='text-center mt-5 mb-5'>Conheça os personagens</h2>

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
                            onClick={() => {
                                setPage(prevPage)
                                window.scrollTo({top: 0, behavior: 'smooth'})
                            }}
                            style={{
                                background: '#0AB0C7',
                                border: '1px solid #0AB0C7',
                                
                            }}
                        > 
                            Anterior
                        </button>
                        <button
                            className='btn btn-primary'
                            onClick={() => {
                                setPage(nextPage)
                                window.scrollTo({top: 0, behavior: 'smooth'})
                            }}
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

            </div>

            <Footer />
        </>
    )
}