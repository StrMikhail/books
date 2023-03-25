import React from 'react';

const InputSelect = ({ options, id }) => {
    return (
        <select
            id={id}
            onChange={(e) => console.log(e.target.options[e.target.selectedIndex].value)}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.title}
                </option>
            ))}
        </select>
    );
};

export default InputSelect;
