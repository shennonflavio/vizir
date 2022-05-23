import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FinishContract from '../views/pages/FinishContract';
import HomePage from '../views/pages/HomePage';
import ThanksPage from '../views/pages/ThanksPage';

function AppRoutes() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/contract' element={<FinishContract />} />
                <Route path='/thanks' element={<ThanksPage />} />
            </Routes>
        </Router>

    );
}

export default AppRoutes;
