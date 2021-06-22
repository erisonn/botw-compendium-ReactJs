import React from 'react';

const CreatureFood = ({creaturesList}) => {
    return ( 
        <div className="creatures">
            {creaturesList.food.map(creature =>
                <div className="creature-item" key={creature.id}>
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
            )}
        </div>
    );
}
export default CreatureFood;