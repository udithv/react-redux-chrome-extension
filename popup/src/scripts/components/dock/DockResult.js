import React, { Component } from 'react';
import { goTo } from 'route-lite';

import Dock from '../dock/Dock';

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
                        onClick={() => goTo(Dock)}
                    >
                        <img src="img/sea-ship-with-containers.svg" alt="dockit" />
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