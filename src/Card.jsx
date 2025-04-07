import React from 'react'

const Card = (props) => {
    const { id, img, area, category, meal } = props;
    return (
        <div className='card'>
            <img width={200} height={200} src={img} alt="" />
            <p>title: {meal}</p>
            <p>category:{category}</p>
            <button>delete</button>
        </div>
    )
}

export default Card
