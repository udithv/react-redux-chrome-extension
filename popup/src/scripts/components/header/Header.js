import React from 'react';

const Header = () => {
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
               onClick={() => window.open("http://localhost:5000/api/logout")} 
          />
      </div>
    );
}

export default Header;