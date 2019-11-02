import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (

    <nav>
        <ul>
            <li>
                <Link to="/">HOME</Link>
            </li>
            
            <li>
                <Link to="/about">ABOUT</Link>
            </li>
            
            <li>
                <Link to="/article-list">Articles</Link>
            </li>
        </ul>
    </nav>

)

export default NavBar