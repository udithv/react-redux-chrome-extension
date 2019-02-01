import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Store } from 'react-chrome-redux';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (
      <h1>Hello App</h1>
    );
  }
}

//export default connect(mapStateToProps, { fetchUser })(App);
export default App;