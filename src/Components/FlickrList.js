import React from 'react';
import Flickr from './Flickr';

const FlickrList = props => { 
  
  const results = props.pics;
  
  let pics = results.map( flik => 
    <Flickr url={`https://live.staticflickr.com/${flik.server}/${flik.id}_${flik.secret}.jpg
`} key={flik.id} />
  );
  
  return (
    <ul className="gif-list">
      {pics}
    </ul> 
  );
}

export default FlickrList;
