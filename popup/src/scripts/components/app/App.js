import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchUser } from '../../actions';
import { Store } from 'react-chrome-redux';
import axios from 'axios';

const proxyStore = new Store({
  portName: 'errordock'
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/current_user')
        .then(res => this.props.fetchUser(res.data));
    
  }

  handleOnClick(message) {
    /* proxyStore.dispatch({ type: 'openLoginPage' }); */
    //this.props.fetchUser(message);
    switch(message){
      case 'login': window.open("http://localhost:5000/auth/google");
      case 'logout': window.open("http://localhost:5000/api/logout");
      case 'current_user': window.open("http://localhost:5000/api/current_user");
      case 'add bookmark': proxyStore.dispatch({ type: 'GET_TAB_INFO'});
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
                  onClick={() => proxyStore.dispatch({ type:'SAY_HI'})}
                >
                  say hi
                </button>
              </div>
            )
            }

  renderHomePage() {
  return (
            <div>
              <h1>Welcome!!!!</h1>
              {this.props.auth.googleId}
              <button 
                onClick={this.handleOnClick.bind(this, 'logout')}
              >
                logout
              </button>
              <button 
                onClick={this.handleOnClick.bind(this, 'add bookmark')}
              >
                +
              </button>
            </div>
         );
  }

  render() {
    console.log(this.props.test);
    return (
      <div>
        { this.props.auth ? this.renderHomePage() : this.renderLoginButton()  }
      </div>
    );
  }
}

const mapStateToProps = ({auth, test}) => {
  return {
    auth,
    test
  };
};

export default connect(mapStateToProps, { fetchUser })(App);
