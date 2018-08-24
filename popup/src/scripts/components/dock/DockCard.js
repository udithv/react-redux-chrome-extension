import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setCurrentDock } from '../../actions';


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
        console.log(this.props.current_dock);
        return (
            <div className="dock__card">
                <img src="img/sea-ship-with-containers.svg" alt="" className="dock__list-icon left" />
                <p className="left">{this.props.projectName}</p>
                {this.renderCheck()}
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return {
        current_dock: auth.current_dock
    }
}

export default connect(mapStateToProps, { setCurrentDock })(DockCard);