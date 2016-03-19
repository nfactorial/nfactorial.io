"use strict";

import React from 'react';

require('./image_link.sass');


/**
 * React component for image links on the page.
 * Specify the source image url with the src property. eg.
 *
 * <ImageLink src='myimage.png'/>
 */
export default React.createClass({
    render: function() {
        return (
            <div className='image-link-container'>
                <img className='img-responsive image-link' src={this.props.src} />
                <div className='image-link-overlay'></div>
            </div>
        );
    }
});
