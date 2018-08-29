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

    renderMessage() {
        return (
            <div className="dock__message">
                <span className="dock__message-main">Are you Sure ?</span>
                <p className="dock__message-secondary">
                    The dock has 10 webpages
                </p>
            </div>
        );
    }

    renderNav() {
        return (
            <div className="footer">
                <div className="footer-nav">
                    <a 
                        className="btn__float btn__float--medium"
                        onClick={this.handleClick.bind(this)}
                    >
                        <img src="img/check-mark.svg" alt="dockit" />
                    </a>
                    <a 
                        className="btn__float btn__float--medium"
                        onClick={() => goBack()}
                    >
                        <img src="img/back-arrow.svg" alt="dockit"/>
                    </a>
                </div>
            </div>  
        );
        
    }

    render() {
        return (
            <div>
                {this.renderMessage()}
                {this.renderNav()}
            </div>
        );
    }

    /* render() {
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
    } */
}

export default connect(null, { deleteDock })(DockDelete);