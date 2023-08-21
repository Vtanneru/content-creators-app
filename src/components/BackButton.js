import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();
    
    return (
        <button onClick={() => navigate(-1)} style={styles.button}>
            <FontAwesomeIcon icon={faArrowLeft} style={styles.icon} />
        </button>
    );
};

const styles = {
    button: {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '10px',
        position: 'fixed',
        top: '10px',
        left: '10px',
        zIndex: 10
    },
    icon: {
        color: 'white',
        fontSize: '2rem'
    }
};

export default BackButton;
