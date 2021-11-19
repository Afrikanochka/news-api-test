import React, { useState } from 'react';

const useSelect = (initialState, options) => {

    // State of the custom hook
    const [ state, updateState ] = useState(initialState);

    // Interface that we show on the Form.jsx
    const SelectNews = () => (
      <select 
        className="browser-default"
        value={state}
        onChange={ e => updateState(e.target.value) }
        > 
        {options.map(option => (
          <option key={option.value} value={option.value} >{option.label}</option>
        ))}
      </select>
    );

    return [ state, SelectNews ];
}
 
export default useSelect;