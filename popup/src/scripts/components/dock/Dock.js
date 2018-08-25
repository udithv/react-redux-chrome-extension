import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'route-lite';


import DockCreate from './DockCreate';
import DockList from './DockList';

import { fetchDocks } from '../../actions';

class Dock extends Component {

    componentDidMount() {
        this.props.fetchDocks();
    }

    renderGoBack() {
        return (
            <div className="footer">
                <div className="footer-nav">
                    <a  
                        onClick={() => goBack()}
                        //onClick={() => this.props.changePage('form')}
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



export default connect(null, { fetchDocks })(Dock);