"use strict";

import React from 'react';

require('./navbar.sass');

/**
 * Implements the main navbar for the homepage.
 */
export default class NavBar extends React.Component {
    componentDidMount() {
        // TODO: Supply id of header as an element property
        $(".navbar").affix({
            offset: {
                top: $("#page-header").outerHeight(true)
            }
        });
    }

    render() {
        const items = this.props.data.items.map( e => {
            return (
                <li className="page-scroll" key={e.id}>
                    <a href={e.href}>{e.title}</a>
                </li>
            );
        });

        return (
            <div className="navbar-wrapper" id="navbar-wrapper">
                <nav className="navbar navbar-default navbar-static navbar-center-menu" role="navigation" id="navbar-container" >
                    <div className="container navbar-container">
                        <div className="navbar-header page-scroll">
                            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="navbar-collapse">
                                <span className="sr-only" >Toggle Navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                            <a className="navbar-brand visible-xs visible-sm" href="#page-root">
                                {this.props.data.brandText}
                            </a>
                        </div>
                    </div>
                    <div className="navbar-collapse collapse" >
                        <ul className="nav navbar-nav">
                            {items}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
};
