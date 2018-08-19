import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Store } from 'react-chrome-redux';

//Components
import WebPageList from '../webpagelist/WebPageList';

const proxyStore = new Store({
  portName: 'errordock'
});

class ErrorDock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  return (
            <div>
              <h1>Welcome !</h1>
              <WebPageList />
              <button 
                onClick={() => window.open("http://localhost:5000/api/logout")}
              >
                logout
              </button>
              <button 
                onClick={() => proxyStore.dispatch({ type: 'DOCK_IT'})}
              >
                +
              </button>
            </div>
         );
  }

}



export default ErrorDock;
