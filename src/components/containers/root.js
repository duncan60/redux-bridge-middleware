import React, { Component } from 'react';
import Hello from './hello';

export default class Root extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Hello />
            </div>
        );
    };
};
