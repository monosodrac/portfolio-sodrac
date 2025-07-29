import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Inicio from '../pages/Home';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Inicio />} />

                    <Route path='*' element={<Inicio />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
