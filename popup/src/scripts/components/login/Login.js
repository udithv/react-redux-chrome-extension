import React, {Component} from 'react';
import {connect} from 'react-redux';

import { Store } from 'react-chrome-redux';


const proxyStore = new Store({
  portName: 'errordock'
});

class Login extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(   
              <div>
                <button 
                  onClick={() =>  window.open("http://localhost:5000/auth/google")}
                >
                  Login
                </button>
                <button 
                  onClick={() => proxyStore.dispatch({ type:'DOCK_IT'})}
                >
                  say hi
                </button>
              </div>
            )
            }

}



export default Login;
