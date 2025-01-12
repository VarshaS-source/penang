import React from 'react';
import './TouristSpot.css';

import penanghillImage from '../assets/penanghill.jpg';
import kekloksiImage from '../assets/kekloksi.jpg';
import gurneydriveImage from '../assets/gurneydrive.jpg';
import penangbridge from '../assets/penangbridge.jpg';
import clanjettiesImage from '../assets/clanjetties.jpg';
import nationalparkImage from '../assets/nationalpark.jpg';
import streetartImage from '../assets/streetart.jpg';
import mansion from '../assets/mansion.jpg';
import spicegarden from '../assets/spicegarden.jpg';
import entopia from '../assets/entopia.jpg';

const TouristSpot = () => {
    const touristSpots = [
        { name: 'Penang Hill', description: 'A serene hilltop escape.', image: penanghillImage },
        { name: 'Kek Lok Si', description: 'Majestic Buddhist temple.', image: kekloksiImage },
        { name: 'Gurney Drive', description: 'Famous seafront promenade.', image: gurneydriveImage },
        { name: 'Penang Bridge', description: 'Iconic architecture.', image: penangbridge },
        { name: 'Clan Jetties', description: 'Historic waterfront houses.', image: clanjettiesImage },
        { name: 'Penang National Park', description: 'Nature at its best.', image: nationalparkImage },
        { name: 'Street Art', description: 'World-famous murals.', image: streetartImage },
        { name: 'Cheong Fatt Tze Mansion', description: 'Heritage preserved.', image: mansion },
        { name: 'Tropical Spice Garden', description: 'Explore spice varieties.', image: spicegarden },  
        { name: 'Entopia Butterfly Farm', description: 'Nature and butterflies galore.', image: entopia }
    ];

    return (
        <section id="tourist-spots"> 
            <div className="tourist-spot-section">
                <h2 className="section-title">Discover Tourist Spots</h2>
                <div className="tourist-spot-grid">
                    {touristSpots.map((spot, index) => (
                        <div key={index} className="spot-card">
                            <img src={spot.image} alt={spot.name} className="spot-image" />
                            <h3 className="spot-name">{spot.name}</h3>
                            <p className="spot-description">{spot.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TouristSpot;

