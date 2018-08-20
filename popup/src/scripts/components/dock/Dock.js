import React, { Component } from 'react';

import DockCreate from './DockCreate';
import DockList from './DockList';

class Dock extends Component {
    renderGoBack() {
        return (
            <div className="footer">
                <div className="footer-nav">
                    <a  
                        onClick={() => this.props.changePage('form')}
                        className="btn__float btn__float--medium"
                    >
                        <img src="img/back-arrow.svg" alt="dockit" />
                    </a>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div className="dock__dashboard">
                <DockCreate />
                <DockList /> 
                {this.renderGoBack()}
            </div>
        );  
    }
    
}

export default Dock;