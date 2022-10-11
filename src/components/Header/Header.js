import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to = '/'>Skill Tests</Link>
            <Link to = '/statistics'>Statistics</Link>
            <Link to = '/blog'>Blog</Link>
        </nav>
    );
};

export default Header;