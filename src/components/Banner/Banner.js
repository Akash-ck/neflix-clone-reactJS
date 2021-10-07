import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {

    const [movie, setMovie] = useState()

useEffect(() => {
  
axios.get(`trending/all/day?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data.results[0])
    setMovie(response.data.results[0])


})

}, [])

    return (
        <div 
        style ={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
        className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.name : ''}</h1>
                <div className='banner_buttons'>
                    <button className='button'>play</button>
                    <button className='button'>my list</button>

                </div>
                <h1 className='description'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</h1>

            </div>
            <div className="fade_bottom"></div>
            
        </div>
    )
}

export default Banner
