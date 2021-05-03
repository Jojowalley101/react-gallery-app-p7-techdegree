import React from 'react';
import { Gif as Flick } from "./Flick";

function flickrList(props) {

    const results = props;
    console.log(results);
    let fotos = results.map(flik => <Flick url='https://live.staticflickr.com/${flik.server}/${flik.id}_${flik.secret}_w.jpg'
key={flik.id} />
    );
    

    return (
        <ul className="gif-list">
            {fotos}
        </ul>
    );
}

export default flickrList;