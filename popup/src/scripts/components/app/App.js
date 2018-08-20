import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchUser } from '../../actions';
import { Store } from 'react-chrome-redux';
import axios from 'axios';

//Components
import Login from '../login/Login';
import ErrorDock from '../errordock/ErrorDock';




class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    axios.get('http://localhost:5000/api/current_user')
        .then(res => this.props.fetchUser(res.data));
    
  }

  render() {
    return (
      <div  className="chrome-ext__body">
        { this.props.auth ? <ErrorDock /> : <Login/>  }
      </div>
    );
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  };
};

export default connect(mapStateToProps, { fetchUser })(App);
