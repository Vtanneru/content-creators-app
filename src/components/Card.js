import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPen } from '@fortawesome/free-solid-svg-icons';
import {
    faTwitter,
    faYoutube,
    faInstagram,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ creator }) => {
    return (
        <div className="card" style={{ backgroundImage: `url(${creator.imageURL})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="card-header">
                <h5 className="card-title">{creator.name}</h5>
                <div className="card-actions">
                    <Link to={`/creator/${creator.id}/edit`}>
                        <FontAwesomeIcon icon={faPen} className="action-icon" />
                    </Link>
                    <Link to={`/creator/${creator.id}`}>
                        <FontAwesomeIcon icon={faInfoCircle} className="action-icon" />
                    </Link>
                </div>
            </div>
            <div className="card-body">
                <div className="card-links">
                    {creator.youtubeURL && (
                        <a href={creator.youtubeURL} className="card-link">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    )}
                    {creator.instagramURL && (
                        <a href={creator.instagramURL} className="card-link">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    )}
                    {creator.tiktokURL && (
                        <a href={creator.tiktokURL} className="card-link">
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                    )}
                    {creator.twitterURL && (
                        <a href={creator.twitterURL} className="card-link">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    )}
                </div>
                <div className="card-description">
                    <p className="card-text">{creator.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
