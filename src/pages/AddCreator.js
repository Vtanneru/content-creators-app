import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import BackButton from '../components/BackButton';
import './styles.css';

function AddCreator() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [youtubeURL, setYoutubeURL] = useState("");
    const [instagramURL, setInstagramURL] = useState("");
    const [twitterURL, setTwitterURL] = useState("");
    const [tiktokURL, setTiktokURL] = useState("");

    const navigate = useNavigate();

    const addCreator = async (e) => {
        e.preventDefault();

        const { error } = await supabase
            .from('creatorverse')
            .insert([{ name, description, imageURL, youtubeURL, instagramURL, twitterURL, tiktokURL }]);

        if (error) {
            console.error('Error adding creator:', error);
        } else {
            navigate('/');
        }
    };

    return (
        <div className="page-background">
            <BackButton/>
            <h2 className="animated-title" style={{fontSize:"30px", marginBottom:'20px'}}>Add a Content Creator</h2>
            <form onSubmit={addCreator}>
                <div className="form-label">
                    <label className='ac-label'>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div className="form-label">
                    <label className='ac-label'>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>

                <div className="form-label">
                    <label className='ac-label'>Image URL (optional):</label>
                    <input type="url" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
                </div>

                <div className="form-label">
                    <label className='ac-label'>YouTube URL (optional):</label>
                    <input type="url" value={youtubeURL} onChange={(e) => setYoutubeURL(e.target.value)} />
                </div>

                <div className="form-label">
                    <label className='ac-label'>Instagram URL (optional):</label>
                    <input type="url" value={instagramURL} onChange={(e) => setInstagramURL(e.target.value)} />
                </div>

                <div className="form-label">
                    <label className='ac-label'>Twitter URL (optional):</label>
                    <input type="url" value={twitterURL} onChange={(e) => setTwitterURL(e.target.value)} />
                </div>

                <div className="form-label">
                    <label className='ac-label'>TikTok URL (optional):</label>
                    <input type="url" value={tiktokURL} onChange={(e) => setTiktokURL(e.target.value)} />
                </div>
            </form>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
                <button className="button" style={{placeSelf:'center'}} onClick={addCreator}>
                    <span className='button-text'>Add Creator</span>
                </button>
            </div>
        </div>    
        
    );
}

export default AddCreator;