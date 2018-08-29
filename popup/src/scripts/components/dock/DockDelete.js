import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goBack, goTo } from 'route-lite';

import { deleteDock } from '../../actions';

import Dock from './Dock';

class DockDelete extends Component {

    handleClick() {
        this.props.deleteDock(this.props.id);
        goTo(Dock);
    }

    render() {
        return (
            <div>
                Are you sure you wanna delete 
                {this.props.projectName} ?
                {this.props.id}

                <button onClick={this.handleClick.bind(this)}>
                    Yes
                </button>
                <button onClick={() => goBack()}>
                    Cancel
                </button>
            </div>
        );
    }
}

export default connect(null, { deleteDock })(DockDelete);