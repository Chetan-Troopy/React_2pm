import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function FundamentalMenu() {
  return (
    <>
      <div className="row my-3 py-3 bg-danger">
        <div className="col">
          <ol>
            <li><Link className='text-white' to="introReact">Introduction To React</Link></li>
            <li><Link className='text-white' to="props">Props In React</Link></li>
            <li>About</li>
          </ol>
        </div>
      </div>
      <div className="row my-3 text-bg-dark">
        <div className="col">
          <h2>Outlet</h2>
          <Outlet /> {/* Child components will render here */}
        </div>
      </div>
    </>
  );
}

export default FundamentalMenu;
