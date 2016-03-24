"use strict";

import React from 'react';

require('./article_section.sass');

/**
 * Displays a list of articles with a section title.
 */
export default class ArticleSection extends React.Component {
    render() {
        const items = this.props.data.items.map( e => {
            return (
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
            );
        });

        return (
            <section className="section" id={this.props.data.id}>
                <div className="container section-wrapper">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h2 className="section-title uppercase">
                                    {this.props.data.title}
                                </h2>
                                <p className="section-subtitle">
                                    {this.props.data.description}
                                </p>
                            </div>
                        </div>
                        {items}
                    </div>
                </div>
            </section>
        );
    }
};
