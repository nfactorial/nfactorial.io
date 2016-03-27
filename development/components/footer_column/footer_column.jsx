"use strict";

import React from 'react';

require('./footer-column.sass');

var logoStyles = {
    twitter: 'twitter-logo fa-twitter',
    gplus: 'gplus-logo fa-google-plus',
    facebook: 'facebook-logo fa-facebook',
    github: 'facebook-logo fa-github',      // TEMP: Using facebook color for Github logo
    codepen: 'codepen-logo fa-codepen'
};


/**
 *
 */
export default class FooterColumn extends React.Component {
    /**
     * Renders the HTML content for a text footer item.
     * @param item Description of the footer item to be rendered.
     * @returns {XML} Returns the HTML representation of the footer item.
     */
    renderTextLink(item) {
        return (
            <li>
                <a href={item.link} target="_blank">
                    {item.text}
                </a>
            </li>
        );
    }

    /**
     * Renders the HTML content for a text footer item.
     * @param item Description of the footer item to be rendered.
     * @returns {XML} Returns the HTML representation of the footer item.
     */
    renderIconLink(item) {
        var style = 'fa fa-2x footer-social-icon text-center ' + logoStyles[ item.style ];

        return (
            <li>
                <a href={item.link} target="_blank">
                    <i className={style} />
                </a>
            </li>
        );
    }

    render() {
        const items = this.props.data.items.map( e => {
            switch ( e.type ) {
                case 'text':
                    return this.renderTextLink(e);

                case 'icon':
                    return this.renderIconLink(e);

                default:
                    console.log('Unknown footer item type \'' + e.type + '\'.' );
                    break;
            }
        });

        return (
            <div className="col-xs-4 footer-column">
                <ul className="list-unstyled">
                    <li className="footer-column-title">{this.props.data.title}</li>
                    {items}
                </ul>
            </div>
        );
    }
};
