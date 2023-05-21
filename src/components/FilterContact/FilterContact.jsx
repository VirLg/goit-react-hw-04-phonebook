import React from "react";
import PropTypes from 'prop-types';

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


Filter.propTyps={
  text:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired
}