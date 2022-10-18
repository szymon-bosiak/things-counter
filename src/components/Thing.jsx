import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import ThingCount from './ThingCount';


const Thing = ({ things, removeThing}) => {


    return things.map((thing) => (
        <div className='thing_container' key={thing.id}>
            
            <div className='main_content'>
                {thing.text}
                <ThingCount />
            </div>
        
            <div className='icon'>
                <RiCloseCircleLine
                    onClick={() => removeThing(thing.id)}
                    className='delete-icon'
                />
            </div>
        </div>
    ));
};

export default Thing;