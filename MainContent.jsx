import React from "react";
import './MainContent.css';


import touristSpotImage from '../assets/touristspot.jpg';
import hotelImage from '../assets/hotel.jpg';
import foodImage from '../assets/food.jpg';
import adventureImage from '../assets/adventure.jpg';
import video from '../assets/video.mp4';

const MainContent = () => {
    const categories = [
        {
            title: "Tourist Spots",
            description: "Uncover the hidden gems of Penang – Your next adventure awaits!",
            image: touristSpotImage,
            link: "#tourist-spot", 
        },
        {
            title: "Foods",
            description: "From hawker stalls to gourmet plates – Experience the true taste of Penang!",
            image: foodImage,
            link: "#food", 
        },
        {
            title: "Hotels",
            description: "Relax and unwind – The best places to stay in Penang are just a click away!",
            image: hotelImage,
            link: "#hotels", 
        },
        {
            title: "Adventures",
            description: "Adventure calls! Experience heart-pounding activities in Penang!",
            image: adventureImage,
            link: "#adventure", 
        },
    ];

    return (
        <div>
            <section className="main-content">
                <h2 className="section-title">Your Penang Journey</h2>
                <div className="video-container">
                    <video width="100%" height="auto" controls muted={false}>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* New Wording Below Video */}
                <div className="video-description">
                    <h2>Explore Our Categories</h2>
                    <p>Discover exciting destinations, travel tips, and more in our curated categories below.</p>
                </div>

                {/* Category Grid */}
                <div className="category-grid">
                    <div className="category-card">
                        <div
                            className="category-image"
                            style={{ backgroundImage: `url(${touristSpotImage})` }}
                        >
                            <div className="category-overlay">
                                <h3>Tourist Spots</h3>
                                <p>Uncover the hidden gems of Penang – Your next adventure awaits!</p>
                                <a href="#tourist-spot" className="explore-btn">Explore Tourist Spots</a>
                            </div>
                        </div>
                    </div>

                    <div className="category-card">
                        <div
                            className="category-image"
                            style={{ backgroundImage: `url(${foodImage})` }}
                        >
                            <div className="category-overlay">
                                <h3>Foods</h3>
                                <p>From hawker stalls to gourmet plates – Experience the true taste of Penang!</p>
                                <a href="#food" className="explore-btn">Explore Foods</a>
                            </div>
                        </div>
                    </div>

                    <div className="category-card">
                        <div
                            className="category-image"
                            style={{ backgroundImage: `url(${hotelImage})` }}
                        >
                            <div className="category-overlay">
                                <h3>Hotels</h3>
                                <p>Relax and unwind – The best places to stay in Penang are just a click away!</p>
                                <a href="#hotels" className="explore-btn">Explore Hotels</a>
                            </div>
                        </div>
                    </div>

                    <div className="category-card">
                        <div
                            className="category-image"
                            style={{ backgroundImage: `url(${adventureImage})` }}
                        >
                            <div className="category-overlay">
                                <h3>Adventures</h3>
                                <p>Adventure calls! Experience heart-pounding activities in Penang!</p>
                                <a href="#adventure" className="explore-btn">Explore Adventures</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sections with IDs for scrolling */}
            {/* Tourist Spot Section */}
            <section id="tourist-spots">
                <div className="tourist-spot-grid">
                    {/* Tourist spots content goes here */}
                </div>
            </section>

            {/* Food Section */}
            <section id="foods">
                <div className="food-grid">
                    {/* Food content goes here */}
                </div>
            </section>

            {/* Hotels Section */}
            <section id="hotel">
                <div className="hotel-grid">
                    {/* Hotels content goes here */}
                </div>
            </section>

            {/* Adventures Section */}
            <section id="adventure">
                 <div className="adventure-grid">
                    {/* Adventures content goes here */}
                </div>
            </section>
        </div>
    );
};

export default MainContent;









