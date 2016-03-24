"use strict";

import React from 'react';

import ArticleSection from '../article_section/article_section.jsx'


/**
 * Component to manage the display of all article sections within the homepage.
 */
export default class Articles extends React.Component {
    render() {
        const items = this.props.data.map( e => {
            return (
                <ArticleSection data={e} key={e.id} />
            );
        });

        return (
            <div>
                {items}
            </div>
        );
    }
};
