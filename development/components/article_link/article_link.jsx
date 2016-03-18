"use strict";

import React from 'react';

import ImageLink from '../image_link/image_link.jsx';


/**
 * React component to display a brief article description and link.
 * The articles title should be specified using the 'title' property,
 * The articles thumbnail image should be specified using the 'img' property.
 * the description should be contained within the element body. eg.
 *
 * <ArticleLink title='content title' img='article_image.png'>Content description goes here.</ArticleLink>
 */
export default React.createClass({
    render: function() {
        return (
            <div className='row'>
                <ImageLink src={this.props.img} />
                <div className='col-md-6' >
                    <h2 className='article-title'>{this.props.title}</h2>
                    <p>{this.props.children}</p>
                </div>
            </div>
        );
    }
});
