import React from "react";


export const Filter = function({value, onChange}){

    return(
        <label>      
    Search<input
    type='text'
    name="filter"
    value={value}
    onChange={onChange}
    />

  </label>
    )

}