import React, { Component } from 'react';

class DockCard extends Component {
    render() {
        return (
            <div className="dock__card">
                <img src="img/sea-ship-with-containers.svg" alt="" className="dock__list-icon left" />
                <p className="left">{this.props.projectName}</p>
                <img src="img/life-saver.svg" alt="" className="dock__list-icon right" />
            </div>
        );
    }
}


export default DockCard;