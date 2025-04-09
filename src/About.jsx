import React from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {
    const navigate = useNavigate()
    const goTo = () => {
        navigate('/');
    }


    return (
        <div>
            about
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ullam!</p>
            <button onClick={goTo}>Go to home page </button>
        </div>
    )
}

export default About
