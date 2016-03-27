"use strict";

import React from 'react';

require('./image_link.sass');


/**
 * React component for image links on the page.
 * Specify the source image url with the src property. eg.
 *
 * <ImageLink src='myimage.png'/>
 */
export default class ImageLink extends React.Component {
    render() {
        return (
            <div className='col-sm-2 image-link-container'>
                <img className='img-responsive image-link' src={this.props.src} />
                <div className='image-link-overlay'></div>
            </div>
        );
    }
}
