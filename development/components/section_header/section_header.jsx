"use strict";

import React from 'react';

/**
 * React component that displays the heading for a section on the page.
 * Specify the text to be displayed as the element body. eg.
 *
 * <SectionHeader>Title Goes Here</SectionHeader>
 */
export default class SectionHeader extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <h2 className='section-title'>{this.props.children}</h2>
                </div>
            </div>
        );
    }
}
