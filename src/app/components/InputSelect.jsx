import React from 'react';

const InputSelect = ({ options, id, handleChange, select }) => {
    return (
        <select id={id} onChange={handleChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.title}
                </option>
            ))}
        </select>
    );
};

export default InputSelect;
