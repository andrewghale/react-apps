import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <nav className="nav">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/to-do-list">To Do List</Link></li>
        </ul>
    </nav>
)

export default Nav;