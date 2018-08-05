import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Store } from 'react-chrome-redux';


class ErrorDock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  return (
            <div>
              <h1>Welcome!!!!</h1>
              <button 
                onClick={() => window.open("http://localhost:5000/api/logout")}
              >
                logout
              </button>
            </div>
         );
  }

}



export default ErrorDock;
