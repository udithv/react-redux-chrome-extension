import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.fetchUser();
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth
//   };
// };

// export default connect(mapStateToProps})(App);
export default App;