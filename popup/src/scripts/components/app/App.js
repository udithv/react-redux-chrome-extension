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

  componentDidMount() {
    console.log("mounted")
    this.props.fetchUser();
  }

  handleOnClick(message) {
    /* proxyStore.dispatch({ type: 'openLoginPage' }); */
    //this.props.fetchUser(message);
    switch(message){
      case 'login': window.open("http://localhost:5000/auth/google");
      case 'logout': window.open("http://localhost:5000/api/logout");
      case 'current_user': window.open("http://localhost:5000/api/current_user");
    }
    
  }

  renderLoginButton() {
    return(   
              <div>
                <button 
                  onClick={this.handleOnClick.bind(this, 'login')}
                >
                  Login
                </button>
                <button 
                  onClick={this.handleOnClick.bind(this, 'current_user')}
                >
                  current_user
                </button>
              </div>
            )
            }

  renderHomePage() {
  return (
            <div>
              <h1>Welcome!!!!</h1>
              <button 
                onClick={this.handleOnClick.bind(this, 'logout')}
              >
                logout
              </button>
            </div>
         );
  }

  render() {
    return (
      <div>
        {this.props.auth}
        { this.props.auth ? this.renderHomePage() : this.renderLoginButton()  }
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
