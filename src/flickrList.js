import React from 'react';
import { Gif } from './flickrs';

function flickrList(props) {

    const results = props.data;
    let fotos = results.map(flik => <Gif url={flik.images.fixed_height.url} key={flik.id} />
    );

    return (
        <ul className="gif-list">
            {fotos}
        </ul>
    );
}
