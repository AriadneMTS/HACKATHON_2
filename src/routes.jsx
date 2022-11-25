import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Detalhes } from './pages/Detalhes';
import { Home } from './pages/Home';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    path='/'
                    element={<Home />}
                />
                <Route 
                    path='/detalhes/:id'
                    element={<Detalhes />}
                />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;