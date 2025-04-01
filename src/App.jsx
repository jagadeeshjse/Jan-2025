import React from 'react';
import Hotel from './Hotel.jsx';

import './app.css';

const App = () => {
  const hotelData = {
    img: 'https://a0.muscache.com/im/pictures/6c60f7f6-ceaf-46f9-879a-944bb694c074.jpg?im_w=720',
    desc: 'Bungalowin Hyderbad'
  }

  const {img, desc} = hotelData;



  return (
    <div className='main'>
      <Hotel name={desc} image= {img} />
      <Hotel name={desc} image= {img}/>
      <Hotel name={desc} image= {img}/>
      <Hotel name={desc} image= {img}/>
      <Hotel name={desc} image= {img}/>
      
    </div>
  )
}


export default App;
