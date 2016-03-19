"use strict";

import React from 'react';

import Carousel from '../components/carousel/carousel.jsx';

/**
 * Main application component that loads the necessary data and displays the homepage.
 */
export default React.createClass({
    render: function() {
        return (
            <div>
                <Carousel />
            </div>
        );
    }
});
