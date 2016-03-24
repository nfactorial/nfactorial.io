"use strict";

import React from 'react';

import FooterColumn from '../footer_column/footer_column.jsx';

require('./footer.sass');


/**
 *
 */
export default class Footer extends React.Component {
    render() {
        const items = this.props.data.columns.map( e => {
            return (
                <FooterColumn data={e} key={e.title} />
            );
        });

        return (
            <footer className="footer">
                <div className="container footer-wrapper">
                    <div className="row">
                        {items}
                    </div>
                </div>
            </footer>
        );
    }
};
