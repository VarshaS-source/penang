import React, { useRef } from 'react';
import './Food.css';

import assamlaksaImage from '../assets/assamlaksa.jpg';
import charkueyteowImage from '../assets/char.jpg';
import aistingkapImage from '../assets/aistingkap.jpg';
import nasikandarImage from '../assets/nasikandar.jpg';
import teowchewchendolImage from '../assets/cendol.jpg';

const Food = () => {
    const foodRef = useRef(null);

    const food = [
        { 
            name: 'Assam Laksa', 
            description: 'A tangy and spicy noodle soup with mackerel, tamarind, and fresh herbs.', 
            image: assamlaksaImage, 
            location: '📍 Wan Dao Tou Assam Laksa',
            address: '1, Jalan Gottlieb, George Town, 10350 George Town, Pulau Pinang'
        },
        { 
            name: 'Char Kuey Teow', 
            description: 'Stir-fried flat rice noodles with prawns, eggs, and bean sprouts.', 
            image: charkueyteowImage, 
            location: '📍 Penang Road Famous Jin Kor Char Kuey Teow',
            address: 'Joo Hooi Cafe, 475 Jalan Penang, George Town, 10000, Malaysia'
        },
        { 
            name: 'Ais Tingkap', 
            description: 'A refreshing, layered iced drink made with colorful syrup and condensed milk.', 
            image: aistingkapImage, 
            location: '📍 Ais Tingkap Penang',
            address: '2, Lebuh Tamil, George Town, 10100 George Town, Pulau Pinang'
        },
        { 
            name: 'Nasi Kandar', 
            description: 'Rice with a variety of curry options, often served with fried chicken or beef.', 
            image: nasikandarImage, 
            location: '📍 Nasi Kandar Deen Maju',
            address: '170, Jalan Gurdwara, 10300 George Town, Penang'
        },
        { 
            name: 'Teo Chew Chendol', 
            description: 'A sweet dessert with shaved ice, coconut milk, pandan jelly, and palm sugar syrup.', 
            image: teowchewchendolImage, 
            location: '📍 Penang Road Famous Teochew Chendol',
            address: '27 & 29 Lebuh Keng Kwee, 10100 Georgetown,Penang,Malaysia'
        },
    ];

    return (
        <section id="foods"> 
            <div ref={foodRef} className="food-section">
                <h2 className="section-title">Famous and Michelin Food You Must Try</h2>
                <div className="food-grid">
                    {food.map((item, index) => (
                        <div key={index} className="food-card">
                            <div className="food-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                            <div className="food-description">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                            <div className="food-location">
                                <h4>{item.location}</h4>
                                <p className="food-address">{item.address}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Food;




