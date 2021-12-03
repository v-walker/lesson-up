import React from 'react';
import Header from './Header';

function BaseLayout({children}) {
    return (
        <>
            <Header />
            <div className="image-layer position-absolute w-100"></div>
            {children}
        </>
    )
}

export default BaseLayout
