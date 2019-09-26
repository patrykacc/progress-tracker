import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import WorkoutsHome from "./WorkoutsHome";

function Home() {
    return (
            <div className="Home">
                <WorkoutsHome/>
            </div>
    );
}

export default Home;
