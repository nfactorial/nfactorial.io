"use strict";

import React from 'react';

require('./carousel.sass');

/**
 * This component implements the hero image at the top of the page.
 * We slide various information messages into view for the user.
 */
export default class Carousel extends React.Component {
    componentDidMount() {
        $('.carousel').carousel( { interval: 5000, pause: false } );
    }

    render() {
        let isActive = true;
        const items = this.props.data.map( e => {
            const className = isActive ? 'item active' : 'item';
            isActive = false;

            // TODO: Make this a separate component?
            return (
                <div className={className} key={e.id}>
                    <h1 className="small">{e.title}</h1>
                    <h1>{e.small}</h1>
                    <p>{e.content}</p>
                </div>
            );
        });

        return (
            <header className='carousel-hero' id='page-header'>
                <div className='carousel-hero-body carousel-dark'>
                    <div className='hero-text text-center'>
                        <div className="carousel slide" id="carousel-slider">
                            <div className="carousel-inner">
                                {items}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
};
