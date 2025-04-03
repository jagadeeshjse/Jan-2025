import React,{useState} from 'react'

const ShowData = () => {
    const [display, setDispaly]= useState(false);

    const handleClick = () =>{
        setDispaly(!display)
    }

  return (
    <div>
      <button onClick={handleClick}>{!display ?'show Data' : 'hide data' }</button>
      {display  ? (<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur debitis illum fuga tempore exercitationem accusantium? Molestiae in quo praesentium minima!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur debitis
        </p>) : <p>data hidden</p> 
      }
      
    </div>
  )
}

export default ShowData
