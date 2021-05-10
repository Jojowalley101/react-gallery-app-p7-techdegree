/**
 * replacing the query route with whatever the search is 
 * 
*/
import { NavLink } from "react-router-dom";
import React from 'react';




const NavBar = props => {

    // function handleClick() {
    //     FlickrList(this.props);
    // }

    // handleClick();

//setting the url of the cats, hamsters, and dogs to the actual 
// n


return (

<nav className="main-nav">

    <ul>
        <li><NavLink to='/cats'>Cats</NavLink></li>
            <li><NavLink to='/dogs'>Dogs</NavLink></li>
            <li><NavLink to='/hamsters'>Hamsters</NavLink></li>
    </ul>
</nav>
)
}

export default NavBar;


// import React from 'react';
// import {
//     Nav,
//     NavLink,
//     Bars,
//     NavMenu,
//     NavBtn,
//     NavBtnLink,
// } from './NavbarElements';

// const Navbar = () => {
//     return (
//     <>
//             <Nav>
//                 <Bars />

                
//                     <NavLink to='/about' activeStyle>
//                         About
//           </NavLink>
//                     <NavLink to='/events' activeStyle>
//                         Events
//           </NavLink>
//                     <NavLink to='/annual' activeStyle>
//                         Annual Report
//           </NavLink>
//                     <NavLink to='/team' activeStyle>
//                         Teams
//           </NavLink>
//             </Nav>
//     );
// };




