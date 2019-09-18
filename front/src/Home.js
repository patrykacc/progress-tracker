import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Home() {
    return (
            <div className="Home">
                <div><Link  to="/signin">Przejdź do logowania</Link></div>
            </div>
    );
}

export default Home;
