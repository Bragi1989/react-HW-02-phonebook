import React from 'react';

const Filter = ({ filter, handleChangeFilter }) => (
  <div>
    <p>Find contacts by name</p>
    <input
      type="text"
      value={filter}
      onChange={handleChangeFilter}
      placeholder="Search contacts"
    />
  </div>
);

export default Filter;