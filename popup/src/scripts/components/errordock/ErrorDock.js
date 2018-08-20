import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Store } from 'react-chrome-redux';

//Components
import Header from '../header/Header';
import WebPageForm from '../webpageform/WebPageForm';
import Dock from '../dock/Dock';

const proxyStore = new Store({
  portName: 'errordock'
});

class ErrorDock extends Component {
  constructor(props) {
    super(props);

    this.state = {
        page: 'form' // form, settings, docks
    }
  }

  handleChangePage(page) {
    this.setState({ page });
  }

  pageContent() {
    if(this.state.page === 'form') {
      return <WebPageForm changePage={this.handleChangePage.bind(this)} />
    } else if(this.state.page === 'docks') {
      return <Dock />;
    }
  }

  renderContent(){
    return (
      <div>
        <Header />
        {this.pageContent()}
      </div> 
    );
  }

  render() {
      console.log(this.state.page);
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }

}



export default ErrorDock;
