import React, { useEffect, useRef } from 'react'
import title from '../assets/title.png'
import hero from '../assets/videos/hero.mp4'

const Hero = () => {

    const videoRef = useRef(); 


    useEffect(()=> {
        if(videoRef.current) videoRef.current.playbackRate =2;
    },[]);


  return (
   <section id='hero'>
    <div>
        <h1>Macbook Pro</h1>
        <img src={title} alt="Macbook Pro Title" />
    </div>
    
    <video ref={videoRef} src={hero} autoPlay muted playsInline></video>

    <button>
    Buy
    </button>
    <p>From R25 505,49 or R2 121,47/pm for 12 months</p>
   </section>
  )
}

export default Hero
