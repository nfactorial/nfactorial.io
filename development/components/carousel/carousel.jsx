"use strict";

import React from 'react';
import heroData from './welcome_messages.jsx'


export default React.createClass({
    render: function() {
        return (
            <header className='hero' id='page-header'>
                <div className='hero-body dark'>
                    <div className='hero-text text-center'>
                    </div>
                </div>
            </header>
        );
    }
});
