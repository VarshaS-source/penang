import React, { useRef } from 'react';
import './Adventure.css';


import hiking from '../assets/hiking.jpg';
import watersports from '../assets/watersports.jpg';
import escape from '../assets/escape.jpg';
import trekking from '../assets/trekking.jpg';
import monkey from '../assets/monkey.jpg';


const Adventure = () => {
    const adventureRef = useRef(null);


    const adventures = [
        {
            name: 'Hiking at Penang Hill',
            description: 'Trek through lush trails with breathtaking views of George Town.',
            image: hiking,
            location: '📍 Penang Hill',
            address: 'Penang Hill, 11500 Bukit Bendera, Penang, Malaysia'
        },
        {
            name: 'Water Sports at Batu Ferringhi',
            description: 'Enjoy thrilling water activities like jet skiing, parasailing, and banana boat rides.',
            image: watersports,
            location: '📍 Batu Ferringhi Beach',
            address: 'Batu Ferringhi, 11100 George Town, Penang, Malaysia'
        },
        {
            name: 'Ziplining and Obstacle Courses',
            description: 'Experience adrenaline-pumping activities at the famous ESCAPE Penang theme park.',
            image: escape,
            location: '📍 ESCAPE Penang',
            address: '828 Jalan Teluk Bahang, 11050 George Town, Penang, Malaysia'
        },
        {
            name: 'Jungle Trekking at Penang National Park',
            description: 'Explore untouched wilderness and spot wildlife in Malaysia’s smallest national park.',
            image: trekking,
            location: '📍 Penang National Park',
            address: 'Jalan Hassan Abas, Teluk Bahang, 11050 George Town, Penang, Malaysia'
        },
        {
            name: 'Trekking to Monkey Beach',
            description: 'Hike to a secluded beach and relax with serene views of the Andaman Sea.',
            image: monkey,
            location: '📍 Monkey Beach',
            address: 'Teluk Duyung, Penang National Park, Penang, Malaysia'
        },
    ];


    return (
        <section id="adventure"> 
            <div className="adventure-section">
                <h2 className="section-title">Adventures You Must Try in Penang</h2>
                <div className="adventure-grid">
                    {adventures.map((item, index) => (
                        <div key={index} className="adventure-card">
                            <div className="adventure-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                            <div className="adventure-description">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                            <div className="adventure-location">
                                <h4>{item.location}</h4>
                                <p className="adventure-address">{item.address}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Adventure;




