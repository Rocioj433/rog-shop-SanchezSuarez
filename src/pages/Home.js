import React from 'react';
import img from '../assets/img1(1).jpg';
import '../styles/home.css';

const Home = () => {
  return (
    <div>
      <img className="image" src={img} alt='' />
      <p className='title'>Proximamente...</p>
    </div>
  )
}

export default Home