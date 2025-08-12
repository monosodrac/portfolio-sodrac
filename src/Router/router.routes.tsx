import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../containers/Header';

import Inicio from '../pages/Home';
import Projects from '../pages/Projects';
import Formation from '../pages/Formation';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Inicio />} />

                    <Route path='/projetos' element={<Projects />} />
                    <Route path='/experiencia' element={<Projects />} />
                    <Route path='/formacao' element={<Formation />} />

                    <Route path='*' element={<Inicio />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
