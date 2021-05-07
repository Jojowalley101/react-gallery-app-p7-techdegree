import React from 'react';
import Flickr from './Flickr';
import { NoFlicks } from "./NoFlicks";
import NotFound from './NotFound';

const FlickrList = props => { 
  
  const results = props.pics;

  let pics;
  if (results.length > 0) {
  
  pics = results.map( flik => 
    <Flickr url={`https://live.staticflickr.com/${flik.server}/${flik.id}_${flik.secret}.jpg
`} key={flik.id} />
  );
  } else {
    pics = <NotFound />
  }
  
  return (
    <div className="photo-container">
      <ul>
        {pics}
      </ul>
    </div> 
  );
}

export default FlickrList;
