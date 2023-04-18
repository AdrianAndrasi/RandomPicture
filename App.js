import React, {useState, useEffect } from 'react';

import './App.css';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images,setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');


  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=25478432-3089ebf9df30d9ff0220cab07&q=${term}&image_type=photo`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className='container'>
      <ImageSearch searchText={(text) => setTerm(text)} />
      {isLoading ? <h1>Loading....</h1>
        :<div className='container-boxes'>
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>}
    </div>
  );
}

export default App;
