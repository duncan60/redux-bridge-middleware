import React, { Component } from 'react';
import Home from 'components/containers/home';

export default class Root extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Home />
            </div>
        );
    };
};
