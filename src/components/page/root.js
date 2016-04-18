import React, { Component } from 'react';
import AppContainer from 'components/containers/app-container';

export default class Root extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <AppContainer />
            </div>
        );
    };
};
