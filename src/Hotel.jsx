import PropTypes from 'prop-types';

console.log(PropTypes)

const Hotel = ({name, image}) => {
  console.log('rendered')
    const handleClick = (e) => {
      console.log('imclicked');
      console.log(e);
    };
    return (
      <div className='hotel-comp'>
        <img className='img' width={200} height={200} src={image} alt="hotel" />
        <p>{name}</p>
        <p>4352</p>
        <button onClick={(e)=>handleClick(e)}>booking </button>
      </div>
    );
};

Hotel.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
};

export default Hotel;