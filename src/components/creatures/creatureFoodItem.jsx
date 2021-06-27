import React from 'react';

const CreatureFoodItem = ({creature}) => {
    return ( 
        <div className="creature-item">
            <h1>{creature.name.toUpperCase()}</h1>
            <img src={creature.image} alt={creature.name} />
            <p>{creature.description}</p>
            <ul>
                <li>Cooking Effect: {creature.cooking_effect}</li>
                <li>Hearts Recovered: {creature.hearts_recovered}</li>
                <ul>
                    Common Locations{creature.common_locations.map(location => <li key={creature.id + location}>{location}</li>)}
                </ul>
            </ul>
        </div>
    );
}
 
export default CreatureFoodItem;