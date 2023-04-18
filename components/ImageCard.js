import React from "react";

import './ImageCard.css'; 

const ImageCard = ({ image }) => {

    const tags = image.tags.split(',');

    return (
    <div className="card">
      <img src={image.webformatURL}></img>
      <div className='card-text'>
        <div className='card-title'>
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
          <li>
            <strong>Dowload:</strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className='hashtags-card'>
        {tags.map((tag, index) => (
          <span key={index} className='hashtags'>
          #{tag}
        </span>
        ))}
      </div>
    </div>
    )
};

export default ImageCard;