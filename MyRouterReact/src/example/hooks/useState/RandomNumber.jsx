import React, { useState } from 'react';

function RandomNumber() {
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * 100)
  );

  return (
    <div>
      <h1>Random Number: {randomNumber}</h1>
    </div>
  );
}

export default RandomNumber;
