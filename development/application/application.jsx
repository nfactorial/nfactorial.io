"use strict";

import React from 'react';

import Carousel from '../components/carousel/carousel.jsx';

/**
 * Main application component that loads the necessary data and displays the homepage.
 */
export default class Application extends React.Component {
    render() {
        return (
            <div>
                <Carousel />
            </div>
        );
    }
}
