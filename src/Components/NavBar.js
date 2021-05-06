/**
 * replacing the query route with whatever the search is 
 * 
*/
import { Route, NavLink } from "react-router-dom";
import React from 'react';

const NavBar = props => {

return (

<nav class="main-nav">

    <ul>
        <li><NavLink to='#'>Cats</NavLink></li>
        <li><NavLink to='#'>Dogs</NavLink></li>
        <li><NavLink to='#'>Hamsters</NavLink></li>
    </ul>
</nav>
)
}

export default NavBar;
