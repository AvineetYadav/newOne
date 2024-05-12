import React from 'react';
import heroImage from '../assets/demo-elearning-hero-banner-01.png';
import heroBackground from '../assets/demo-elearning-hero-bg.jpg';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

const Body = () => {
  const navigate = useNavigate();
  const handleCLick = () => {
    navigate(`/courselistingpage`)
  }
  return (
    <div className="hero-container ">
      <section
        className="hero md:h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left p-8 relative"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-image mb-8 relative w-full h-full md:w-1/2 md:ml-16">
          <img
            className="w-full h-full cursor-pointer object-cover transform transition duration-300 ease-in-out hover:rotate-3"
            src={heroImage}
            alt="Hero Banner"
          />
        </div>
        <div className="hero-content mb-8 md:mb-0 md:mr-4 w-full md:w-1/3">
          <h1 className="text-3xl text-white md:text-4xl lg:text-5xl font-bold animate__animated animate__fadeIn">
            Best Online Learning Platform
          </h1>
          <p className="text-base md:text-lg text-white mt-4 animate__animated animate__fadeInUp">
            Online courses from the world's leading experts. Join 17 million learners today.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded transition duration-300 ease-in-out animate__animated animate__fadeInUp" onClick={handleCLick}>
            Explore Courses
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Body;
