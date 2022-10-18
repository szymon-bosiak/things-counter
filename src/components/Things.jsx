import React, { useState } from 'react'
import Thing from './Thing';
import ThingForm from './ThingForm';
import './../App.css'


const ThingsList = () => {

    const [things, setThings] = useState([]);

    const addThings = thing => {
        if (!thing.text || /^\s*$/.test(thing.text)) {
            return;
        }
        const newThings = [thing, ...things];
        setThings(newThings);
    };

    const removeThing = id => {
        const removedArr = [...things].filter(thing => thing.id !== id);
        setThings(removedArr);
    };
    

  return (
    <div className='things'>
          <h1 className='things_header'>Add your Things to count</h1>
        <ThingForm onSubmit={addThings} />
        <Thing 
            things={things}
            removeThing={removeThing}
        />
    </div>
  )
}

export default ThingsList