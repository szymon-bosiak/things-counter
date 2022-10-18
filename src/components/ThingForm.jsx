import React, { useState } from 'react'

const AddThing = (props) => {

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input,
            value: 0
        });

        setInput('');
    };

  return (
    <form className='form_area' onSubmit={handleSubmit}>
        <input
            className='input_form'
            placeholder='Add a Thing' 
            value={input}
            onChange={handleChange}
            name='text' 
        />
        <button 
            onClick={handleSubmit}
            className='button_form'
        >
            Create counter
        </button>
    </form>
  )
}

export default AddThing