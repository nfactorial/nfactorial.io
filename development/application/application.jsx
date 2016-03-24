"use strict";

import React from 'react';

import appData from './application_data.jsx';
import Carousel from '../components/carousel/carousel.jsx';

require('./application.sass');


/**
 * Main application component that loads the necessary data and displays the homepage.
 */
export default class Application extends React.Component {
    render() {
        return (
            <div>
                <Carousel data={appData.carouselItems} />
            </div>
        );
    }
}
