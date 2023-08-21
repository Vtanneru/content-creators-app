import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import Dialog from '../components/Dialog'; 
import BackButton from '../components/BackButton';
import './styles.css';

const EditCreator = () => {
    const [creator, setCreator] = useState({
        name: '',
        description: '',
        imageURL: '',
        youtubeURL: '',
        instagramURL: '',
        twitterURL: '',
        tiktokURL: ''
    });
    
    const { id } = useParams();
    const navigate = useNavigate();
    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        const fetchCreator = async () => {
            const { data } = await supabase.from('creatorverse').select('*').eq('id', id).single();
            if (data) setCreator(data);
        };

        fetchCreator();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCreator(prev => ({ ...prev, [name]: value }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase.from('creatorverse').update(creator).eq('id', id);
        if (error) {
            alert('Failed to update content creator');
        } else {
            if (data && data.length > 0) {
                navigate(`/creator/${data[0].id}`);
            }else{
                navigate('/')
            }
        }
    };


    const handleDelete = () => {
        setShowDialog(true);
    };  

    const confirmDelete = async () => {
        const { error } = await supabase.from('creatorverse').delete().eq('id', id);
        if (error) {
            alert('Failed to delete content creator');
        } else {
            navigate('/');
        }
        setShowDialog(false);
    };

    return (
        <div className="page-background">
            <BackButton/>
            <h2 className="animated-title" style={{fontSize:"30px", marginBottom:'20px'}}>Edit Content Creator</h2>
            <form onSubmit={handleUpdate}>
                <div className="form-label">
                    <label className='ac-label'>Name:</label>
                    <input type="text" name="name" value={creator.name} onChange={handleInputChange} required />
                </div>

                <div className="form-label">
                    <label className='ac-label'>Description:</label>
                    <textarea name="description" value={creator.description} onChange={handleInputChange} required />
                </div>

                <div className="form-label">
                    <label className='ac-label'>Image URL (optional):</label>
                    <input type="url" name="imageURL" value={creator.imageURL} onChange={handleInputChange} />
                </div>

                <div className="form-label">
                    <label className='ac-label'>YouTube URL (optional):</label>
                    <input type="url" name="youtubeURL" value={creator.youtubeURL} onChange={handleInputChange} />
                </div>

                <div className="form-label">
                    <label className='ac-label'>Instagram URL (optional):</label>
                    <input type="url" name="instagramURL" value={creator.instagramURL} onChange={handleInputChange} />
                </div>

                <div className="form-label">
                    <label className='ac-label'>Twitter URL (optional):</label>
                    <input type="url" name="twitterURL" value={creator.twitterURL} onChange={handleInputChange} />
                </div>

                <div className="form-label">
                    <label className='ac-label'>TikTok URL (optional):</label>
                    <input type="url" name="tiktokURL" value={creator.tiktokURL} onChange={handleInputChange} />
                </div>
            </form>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <button className="button" onClick={handleUpdate}>
                <span className='button-text'>Update Creator</span>
            </button>
            <button className="button" onClick={handleDelete}>
                <span className='button-text'>Delete Creator</span>
            </button>
        </div>

        <Dialog 
            show={showDialog}
            onClose={() => setShowDialog(false)}
            onConfirm={confirmDelete}
            message="Are you sure you want to delete this content creator?"
        />
    </div>
    );
}

export default EditCreator;
