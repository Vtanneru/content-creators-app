import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';
import './styles.css'; 

const ShowCreators = ({ creators }) => {
  return (
    <div className="page-background">
      <BackButton/>
      <h1 className="animated-title">Content Creators</h1>
      <div className={creators.length === 0 ? "no-content-container" : "creators-list"}>
          {creators.length === 0 ? 
            <p className="no-content-message">No Creator Data Yet.</p>
            :
            creators.map(creator => (
                <Card key={creator.id} creator={creator} />
            ))
          }
      </div>
      <Link to="/add-creator">
          <button className="button" style={{margin:"60px"}} >
            <span className='button-text'>Add a Content Creator</span>
          </button>
      </Link>
    </div>
  );
}

export default ShowCreators;
