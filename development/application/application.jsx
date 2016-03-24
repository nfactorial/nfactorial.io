"use strict";

import React from 'react';

import appData from './application_data.jsx';
import NavBar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';
import Carousel from '../components/carousel/carousel.jsx';
import Articles from '../components/articles/articles.jsx';


require('./application.sass');


/**
 * Main application component that loads the necessary data and displays the homepage.
 */
export default class Application extends React.Component {
    render() {
        return (
            <div>
                <Carousel data={appData.carouselItems} />
                <NavBar data={appData.navbar} />
                <Articles data={appData.articleSections} />
                <Footer data={appData.footer} />
            </div>
        );
    }
}
