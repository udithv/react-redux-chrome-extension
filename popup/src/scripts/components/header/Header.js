import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logout } from '../../actions';

class Header extends Component {
    handleLogout() {
        window.open("http://localhost:5000/api/logout")
        this.props.logout();
    }

    render() {
        return (
            <div className="dock__header">
              <img 
                src="img/boat-from-front-view.svg"
                alt="icon-left" 
                className="dock__header-icon-logo left"
              />
              <span className="dock__header-title left">
                  ErrorDock
              </span>
              <img src="img/turn-off.svg"
                   alt="icon-left" 
                   className="dock__header-icon-logout right"
                   onClick={this.handleLogout.bind(this)} 
              />
          </div>
        );
    }
    
}

export default connect(null, { logout })(Header);