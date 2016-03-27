"use strict";

import React from 'react';

import ImageLink from '../image_link/image_link.jsx';

require('./article_link.sass')


/**
 * React component to display a brief article description and link.
 * The articles title should be specified using the 'title' property,
 * The articles thumbnail image should be specified using the 'img' property.
 * the description should be contained within the element body. eg.
 *
 * <ArticleLink title='content title' img='article_image.png'>Content description goes here.</ArticleLink>
 */
export default class ArticleLink extends React.Component {
    render() {
        return (
            <div className='row article-container'>
                <ImageLink src={this.props.img}/>
                <div className='col-md-6'>
                    <h2 className='article-title'>{this.props.title}</h2>
                    <p>{this.props.children}</p>
                </div>
            </div>
        );
    }
}
/*
<div className="row" key={e.title} >
    <div className="col-sm-2">
        <img className="img-responsive article-image" src={e.image} />
        <div className="article-image-overlay" ></div>
    </div>
    <div className="col-md-6">
        <h2 className="article-title">{e.title}</h2>
        <p>{e.description}</p>
    </div>
</div>
*/