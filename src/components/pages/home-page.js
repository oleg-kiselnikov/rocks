import React from 'react';
import CragList from '../crag-list';

const HomePage = () => {
    const crags = [
        {
            name: 'Nago'
        },
        {
            name: 'Massone'
        }
    ];
    return (
        <CragList crags={crags} />
    );
};

export default HomePage;