"use strict";

import React from 'react';
import heroData from './welcome_messages.jsx'


export default class Carousel extends React.Component{
    render() {
        return (
            <header className='hero' id='page-header'>
                <div className='hero-body dark'>
                    <div className='hero-text text-center'>
                    </div>
                </div>
            </header>
        );
    }
};
