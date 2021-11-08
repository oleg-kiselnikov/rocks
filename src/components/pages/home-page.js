import React from 'react';
import CragList from '../crag-list';

const HomePage = () => {
    const crags = [
        {
            id: 1,
            name: 'Nago'
        },
        {
            id: 2,
            name: 'Massone'
        }
    ];
    return (
        <CragList crags={crags} />
    );
};

export default HomePage;