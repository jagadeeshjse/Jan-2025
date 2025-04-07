import React from 'react'

const ShowPhotos = (props) => {

    console.log(props)
    const { id, url, title } = props;

    return (
        <div className='container'>
            <img width={200} height={200} src={url} alt={title} />
            <p>title:{title}</p>
            <button>delete</button>
        </div>
    )
}

export default ShowPhotos
