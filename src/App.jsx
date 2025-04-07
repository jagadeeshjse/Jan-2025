import React from 'react';
import Hotel from './Hotel.jsx';
import Counter from './Counter.jsx';

import './app.css';
import ShowData from './ShowData.jsx';
import UserForm from './UserForm.jsx';
import ShowPhotos from './ShowPhotos.jsx';
import MealComponent from './MealComponent.jsx';
// import { data } from './data.jsx';
const App = () => {
  // const hotelData = {
  //   img: 'https://a0.muscache.com/im/pictures/6c60f7f6-ceaf-46f9-879a-944bb694c074.jpg?im_w=720',
  //   desc: 62736
  // }

  // const { img, desc } = hotelData;



  return (
    <div className='main'>
      {/* <Hotel  image= {img} />
      <Hotel  image= {img}/>
      <Hotel name={desc} image= {img}/>
      <Hotel name={desc} image= {img}/>
      <Hotel name={desc} image= {img}/> */}
      {/* <Hotel/> */}

      {/* <Counter /> */}
      {/* <ShowData/>
       */}
      {/* <UserForm /> */}

      {/* {
        data.map((each) => {
          const { id, title, url } = each;
          return (
            <div><ShowPhotos id={id} title={title} url={url} /></div>
          )

        })
      } */}

      <MealComponent />
    </div>
  )
}


export default App;
