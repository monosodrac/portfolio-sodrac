import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Inicio from '../pages/Home';
import Projects from '../pages/Projects';
import Header from '../components/Header';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Inicio />} />

                    <Route path='/projetos' element={<Projects />} />
                    <Route path='/experiencia' element={<Projects />} />
                    <Route path='/formacao' element={<Projects />} />

                    <Route path='*' element={<Inicio />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
