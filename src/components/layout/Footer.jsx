// Write all the code here
import React from 'react';
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai';


const SocialMediaBar = () => {
  return (
    <div className="social-media-bar">
         <h8>Seguici sui nostri canali</h8>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <AiFillYoutube size={30} />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <AiFillInstagram size={30} />
      </a>
    </div>
  );
};

export default SocialMediaBar;