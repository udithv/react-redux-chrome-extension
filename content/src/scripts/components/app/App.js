import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchUser } from '../../actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        Count: 100 {this.props.auth}
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
