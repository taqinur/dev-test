import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <h1 className='header-text'>Dev Test</h1>
            <div>
            <Link to = '/'>Skill Tests</Link>
            <Link to = '/statistics'>Statistics</Link>
            <Link to = '/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;