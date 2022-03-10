import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from '../pages/home';
import Mint from '../pages/mint';
import Roadmap from '../pages/roadmap';
import Gallery from '../pages/gallery';
import Login from '../pages/login';
import ScrollToTop from '../scrollTop';
import { useEagerConnect, useInactiveListener } from '../web3s/hooks';

const Routing = () => {
    useEagerConnect();
    useInactiveListener();

    return (
        <Router>
            <ScrollToTop>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="*" element={<Home />} />
                    <Route exact path="/mint" element={<Mint />} />
                    <Route exact path="/roadmap" element={<Roadmap />} />
                    <Route exact path="/gallery" element={<Gallery />} />
                    <Route exact path="/login" element={<Login />} />
                </Routes>
            </ScrollToTop>
        </Router>
    )
}

export default Routing