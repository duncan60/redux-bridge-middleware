import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setSay, fetchAPI } from 'actions';

class AppContainer extends Component {
    constructor() {
        super();
    }
    _onClickHandler = () => {
        this.props.setSay('Rect Redux Cool!');
    }
    _onFetchHandler = () => {
        this.props.fetchAPI();
    }
    render() {
        const {
            say,
            githubData,
            isPending
        } = this.props;
        return (
            <div>
                <div>
                    <button
                        type="button"
                        onClick={this._onClickHandler} >
                        Click Me!
                    </button>
                    {say}
                </div>
                <div>
                    <button
                        type="button"
                        onClick={this._onFetchHandler} >
                        fetchAPI!
                    </button>
                    github:
                    {isPending ? 'fetch pedding' : githubData}
                </div>
            </div>
        );
    };
};

AppContainer.propTypes = {
    say       : PropTypes.string.isRequired,
    githubData: PropTypes.string.isRequired,
    isPending : PropTypes.bool.isRequired,
    setSay    : PropTypes.func.isRequired,
    fetchAPI  : PropTypes.func.isRequired
};

export default connect(
    state => ({
        say       : state.app.say,
        githubData: state.app.githubData,
        isPending : state.app.isPending
    }),
    dispatch => bindActionCreators({
        setSay,
        fetchAPI
    }, dispatch)
)(AppContainer);