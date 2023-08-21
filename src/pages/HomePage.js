import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


const HomePage = () => {

  return (
    <div className="page-background">
      <h1 className="animated-title">Welcome to CreatorVerse</h1>
      <div className="button-container" style={{margin:'15px'}}>
        <Link to="/creators">
          <button className="button">
            <span className='button-text'>VIEW CREATORS</span>
          </button>
        </Link>
        <Link to="/add-creator">
          <button className="button">
            <span className='button-text'>ADD CREATOR</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
