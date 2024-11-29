import React, { useState } from 'react';

function UserProfile() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);

  return (
    <div className="container">
      <div className="mb-3">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={handleAgeChange}
          className="form-control"
        />
      </div>
      <p>
        Hello, <strong>{name}</strong>! You are <strong>{age}</strong> years old.
      </p>
    </div>
  );
}

export default UserProfile;
