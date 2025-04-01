const Hotel = (props) =>{
    console.log('props',props);



    const {name, image} = props;

    // const {img, desc} = name;
    return (
      <div className='hotel-comp'>
        <img className='img' width={200} height={200} src={image} alt="hotel" />
        <p>{name}</p>
        <p>4352</p>
        <button>booking </button>
      </div>
    )
  }

  export default Hotel;