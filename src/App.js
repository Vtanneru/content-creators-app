import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { supabase } from './client';
import HomePage from './pages/HomePage';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';

function App() {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        const fetchCreators = async () => {
            const { data, error } = await supabase
                .from('creatorverse')
                .select('*');

            if (data) {
                setCreators(data);
            } else {
                console.error("Error fetching creators:", error);
            }
        };

        fetchCreators();
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} exact />
                    <Route path="/creators" element={<ShowCreators creators={creators} />} />
                    <Route path="/add-creator" element={<AddCreator />} />
                    <Route path="/creator/:id" element={<ViewCreator />} />
                    <Route path="/creator/:id/edit" element={<EditCreator />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
