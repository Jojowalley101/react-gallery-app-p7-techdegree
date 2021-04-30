import React from 'react';
import { Gif as Flick } from "./Flick";

function flickrList(props) {

    const results = props.data;
    let fotos = results.map(flik => <Flick url={flik.images.fixed_height.url} key={flik.id} />
    );

    return (
        <ul className="gif-list">
            {fotos}
            <li>
                <nav>
                    
                </nav>
            </li>
        </ul>
    );
}

export default flickrList;