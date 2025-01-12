import React from "react";
import './Hotel.css';

import eastern from '../assets/eastern.jpg';
import shangrila from '../assets/shangrila.jpg';
import parkroyal from '../assets/parkroyal.jpg';
import edison from '../assets/edison.jpg';
import granite from '../assets/granite.jpg';
import prestige from '../assets/prestige.jpg';
import hardrock from '../assets/hardrock.jpg';
import lexis from '../assets/lexis.jpg';

const Hotel = () => {
    const hotels = [
        {
            name: "Eastern & Oriental Hotel",
            description: "A historic luxury hotel with colonial charm, offering unparalleled service and views.",
            location: "10 Farquhar Street, 10200 George Town, Malaysia",
            price: "RM 1140 per night",
            website: "https://www.eohotels.com/",
            image: eastern,
        },
        {
            name: "Shangri-La's Rasa Sayang Resort & Spa",
            description: "A five-star resort offering beachfront luxury and world-class spa treatments.",
            location: "Batu Ferringhi Beach, 11100 Penang, Malaysia",
            price: "RM 600 per night",
            website: "https://www.shangri-la.com/penang/rasasayangresort/",
            image: shangrila,
        },
        {
            name: "Parkroyal Penang Resort",
            description: "A beachfront haven offering modern amenities and a serene atmosphere.",
            location: "Batu Ferringhi Beach, 11100 Penang, Malaysia",
            price: "RM 500 per night",
            website: "https://www.parkroyalhotels.com/penang/",
            image: parkroyal,
        },
        {
            name: "The Edison George Town",
            description: "A boutique hotel blending heritage charm with contemporary comfort.",
            location: "15 Lebuh Leith, 10200 George Town, Penang, Malaysia",
            price: "RM 450 per night",
            website: "https://www.theedisonhotels.com/",
            image: edison,
        },
        {
            name: "The Granite Luxury Hotel",
            description: "An upscale hotel offering sleek rooms and luxurious amenities in the heart of the city.",
            location: "25 Jalan Larut, 10050 George Town, Penang, Malaysia",
            price: "RM 480 per night",
            website: "https://www.thegranitehotel.com/",
            image: granite,
        },
        {
            name: "The Prestige Hotel",
            description: "A design-inspired luxury hotel combining elegance and modern amenities.",
            location: "8 Gat Lebuh Gereja, 10300 George Town, Penang, Malaysia",
            price: "RM 550 per night",
            website: "https://www.theprestige.my/",
            image: prestige,
        },

        {
            name: "Hard Rock Hotel Penang",
            description: "A rock-themed beachfront hotel with vibrant energy and great entertainment.",
            location: "Batu Ferringhi, 11100 Penang, Malaysia",
            price: "RM720 per night",
            website: "https://penang.hardrockhotels.net/",
            image: hardrock,
        },
        {
            name: "Lexis Suites Penang",
            description: "A unique hotel featuring private pools and saunas in every suite.",
            location: "28 Jalan Teluk Kumbar, 11920 Bayan Lepas, Penang, Malaysia",
            price: "RM950 per night",
            website: "https://www.lexissuitespenang.com/",
            image: lexis,
        },
    ];

    return (
        <section id="hotels" className="hotel-section"> 
            <h2 className="section-title">Best Hotels & Resorts in Penang</h2>
            <div className="hotel-grid">
                {hotels.map((hotel, index) => (
                    <div key={index} className="hotel-card">
                        <div
                            className="hotel-image"
                            style={{ backgroundImage: `url(${hotel.image})` }}
                        />
                        <div className="hotel-details">
                            <h3 className="hotel-name">{hotel.name}</h3>
                            <p className="hotel-description">{hotel.description}</p>
                            <p className="hotel-location"><strong>Location:</strong> {hotel.location}</p>
                            <p className="hotel-price"><strong>Price:</strong> {hotel.price}</p>
                            <a 
                                href={hotel.website} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hotel-website-btn"
                            >
                                Visit Website
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );

};
export default Hotel;


