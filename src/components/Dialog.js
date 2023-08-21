import React from 'react';

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        background: '#fff',
        padding: '20px',
        width: '300px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },
    button: {
        cursor: 'pointer',
        padding: '5px 10px',
        margin: '5px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#428a74',
        color: 'white'
    }
};

const Dialog = ({ show, onClose, onConfirm, message }) => {
    if (!show) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.content}>
                <p>{message}</p>
                <div>
                    <button style={styles.button} onClick={onClose}>Cancel</button>
                    <button style={styles.button} onClick={onConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default Dialog;
