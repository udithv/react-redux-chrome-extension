import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Store } from 'react-chrome-redux';


import { fetchWebPage } from '../../actions';


//Components
import Header from '../header/Header';
import WebPageForm from '../webpageform/WebPageForm';
import Dock from '../dock/Dock';

const CHROME_URL_REGEX = /^(chrome:\/\/)((\w|\d)+\/*)*/;



/* const proxyStore = new Store({
  portName: 'errordock'
}); */

const isChromeURL = (url) => {
    return CHROME_URL_REGEX.test(url);
}

class ErrorDock extends Component {
  constructor(props) {
    super(props);

    this.state = {
        page: 'form' // form, docks
    }
  }

  componentWillMount() {
    //proxyStore.dispatch({type: 'DOCK_IT'});
    this.props.fetchWebPage();
  }

  handleChangePage(page) {
    this.setState({ page });
  }

  pageContent() {
    if(isChromeURL(this.props.webpage.url)){
      return <p>Settings</p>;
    }else {
      if(this.state.page === 'form') {
        return <WebPageForm 
                  changePage={this.handleChangePage.bind(this)} 
                  webpage={this.props.webpage}
                />
      } else if(this.state.page === 'docks') {
        return <Dock changePage={this.handleChangePage.bind(this)} />;
      }
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


function mapStateToProps({ webpage }) {
  return {
    webpage
  }
}



export default connect(mapStateToProps, { fetchWebPage })(ErrorDock);
