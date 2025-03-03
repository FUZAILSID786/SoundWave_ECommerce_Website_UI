import React from 'react'
import "./AboutHeroSection.css"

const AboutHeroSection = () => {
  return (
    <div className='about-hero-sec-container'>
        <div className='about-hero-sec'>
            <div className='about-hero-img'>
                <img src='https://cdn.pixabay.com/photo/2017/08/29/18/43/music-2694489_1280.jpg' alt=''></img>
            </div>
            <div className='about-hero-text'>
                <h1>ABOUT US</h1>
                <p>Our mission is to serve superior sound quality. We believe that the right audio equipment can transform how you experience music, movies, podcasts, and more. By offering a curated selection of the latest and greatest in audio technology, we strive to help our customers discover the perfect sound for every moment.
                </p>
                <button>VIEW MORE</button>
            </div>
        </div>
    </div>
  )
}

export default AboutHeroSection