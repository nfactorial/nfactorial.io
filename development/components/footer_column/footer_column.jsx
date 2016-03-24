"use strict";

import React from 'react';

require('./footer-column.sass');


/**
 *
 */
export default class FooterColumn extends React.Component {
    render() {
        const items = this.props.data.items.map( e => {
            return (
                <li>
                    <a href={e.link} target="_blank">
                        <i className="twitter-logo fa fa-twitter fa-2x footer-social-icon text-center" />
                    </a>
                </li>
            );
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
