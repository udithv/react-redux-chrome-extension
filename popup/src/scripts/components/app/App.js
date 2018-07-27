import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchUser } from '../../actions';
import { Store } from 'react-chrome-redux';

const proxyStore = new Store({
  portName: 'errordock'
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick(message) {
    /* proxyStore.dispatch({ type: 'openLoginPage' }); */
    //this.props.fetchUser(message);
  }

  renderLoginButton() {
    return <button 
    onClick={this.handleOnClick.bind(this)}
  >
  Login
  </button>;
  }
  render() {
    return (
      <div>
        {this.props.auth}
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { fetchUser })(App);
