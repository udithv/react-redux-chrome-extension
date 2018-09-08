import React, { Component } from 'react';
import { goTo } from 'route-lite';

import Menu from '../menu/Menu';

class DockResult extends Component {

    renderContent() {
        return (
            <div className="dock__success">
                <div className="dock__success-box">
                        <img className="dock__success-logo" src="img/boat-from-front-view.svg" alt="success image" />
                </div>
                <div className="u-margin-bottom-small">
                    <span className="dock__success-message">
                            Docking Sucess!
                    </span>
                </div>
            </div>
        );
    }


    renderNavButton() {
        return (
            <div className="footer">
                <div className="footer-nav">
                    <a 
                        className="btn__float btn__float--medium"
                        onClick={() => goTo(Menu)}
                    >
                        <img src="img/menu.svg" alt="dockit" />
                    </a>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderContent()}
                {this.renderNavButton()}
            </div>
        );
    }
}

export default DockResult;