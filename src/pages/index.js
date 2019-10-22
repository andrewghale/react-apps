import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="wrapper">
        <h1>Home</h1>
        <div className="home-container">
            <div className="counter">
                <h3>Counter</h3>
                <Link to="/counter" />
            </div>
            <div className="to-do-list">
                <h3>To-Do List</h3>
                <Link to="/to-do-list" />
            </div>
        </div>
    </div>
)

export default Home;