import React from 'react';

function noPics(props) {
    return (
        <li className='no-gifs'>
            <i className="material-icons icon-gif">sentiment_very_dissatisfied</i>
            <h3>Sorry, no Fotos match your search.</h3>
        </li>
    );
}

export default noPics;