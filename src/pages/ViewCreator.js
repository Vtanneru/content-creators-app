import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import Card from '../components/Card';
import BackButton from '../components/BackButton';

const ViewCreator = () => {
    const [creator, setCreator] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchCreator = async () => {
            const { data } = await supabase
                .from('creatorverse')
                .select('*')
                .eq('id', id)
                .single();

            if (data) {
                setCreator(data);
            }
        };

        fetchCreator();
    }, [id]);

    return (
        <div className="creator-detail-fullpage">
            <BackButton />
            {creator && <Card creator={creator} />}
        </div>
    );
}

export default ViewCreator;
