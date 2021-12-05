import React from 'react';
import Navigation from './Navigation';

function BaseLayout({children}) {
    return (
        <>
            <header>
                <div className="image-layer">
                    <h1 className="title">Lesson Up</h1>
                </div>
            </header>
            
            <Navigation />
            
            {children}
        </>
    )
}

export default BaseLayout;
