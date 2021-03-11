import React from 'react';
import './Home.css';
import Body from '../Body/Body';
import Team from '../Team/Team';
import Header from '../Header/Header';



const Home = () => {
    return (
        <div className="main-container">
            <Header></Header>
            <Body></Body>
            <Team></Team>
        </div>
    );
};

export default Home;