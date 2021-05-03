import React from 'react';


export function Gif(props) {
    return (
        <li className="gif-wrap">
            <img src={props} alt="" />
        </li>
    );
}
