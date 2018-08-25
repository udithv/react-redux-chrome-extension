import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'route-lite';


import { setCurrentDock } from '../../actions';

import DockView from './DockView';


class DockCard extends Component {

    handleClickSelect(e) {
       this.props.setCurrentDock(this.props.id);
    }

    renderCheck() {
        if(this.props.id === this.props.current_dock._id) {
            return (
                <img src="img/active.svg" alt="selected" className="dock__list-icon right" />
            );
        }

        return (
            <img 
                src="img/inactive.svg" 
                alt="unselected" 
                className="dock__list-icon right"
                onClick={this.handleClickSelect.bind(this)}
            />
        );
        
    }

    render() {
        const { id, projectName } = this.props;
        return (
            <div className="dock__card">
                <img src="img/sea-ship-with-containers.svg" alt="" className="dock__list-icon left" />
                <Link component={DockView} componentProps={{ projectName, id }} >
                    <p className="left">{this.props.projectName}</p>
                </Link>
                {this.renderCheck()}
            </div>
        );
    }
}

function mapStateToProps({ current_dock }) {
    return {
        current_dock
    }
}

export default connect(mapStateToProps, { setCurrentDock })(DockCard);