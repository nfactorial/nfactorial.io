"use strict";

import React from 'react';
import ArticleLink from '../article_link/article_link.jsx';

require('./article_section.sass');

/**
 * Displays a list of articles with a section title.
 */
export default class ArticleSection extends React.Component {
    render() {
        const items = this.props.data.items.map( e => {
            return (
                <ArticleLink title={e.title} img={e.image} >
                    {e.description}
                </ArticleLink>
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
