import React from 'react'

const Card = (props) => {
    const { id, img, area, category, meal, handle } = props;
    return (
        <div className='card' key={id}>
            <img width={200} height={200} src={img} alt="" />
            <p>title: {meal}</p>
            <p>category:{category}</p>
            <button onClick={handle}>delete</button>
        </div>
    )
}

export default Card
