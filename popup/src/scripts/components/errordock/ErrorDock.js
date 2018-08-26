import React, {Component} from 'react';
import {connect} from 'react-redux';

import Router, { Link, goBack } from 'route-lite';



import { fetchWebPage } from '../../actions';


//Components
import Header from '../header/Header';
import WebPageForm from '../webpageform/WebPageForm';
import Dock from '../dock/Dock';

const CHROME_URL_REGEX = /^(chrome:\/\/)((\w|\d)+\/*)*/;

const isChromeURL = (url) => {
    return CHROME_URL_REGEX.test(url);
}

class ErrorDock extends Component {

  componentWillMount() {
    this.props.fetchWebPage();
  }

  handleChangePage(page) {
    this.setState({ page });
  }

  pageContent() {
    if(isChromeURL(this.props.selected_webpage.url)){
      return <p>Settings</p>;
    }else {
        return (
              <Router>
                <WebPageForm 
                  webpage={this.props.selected_webpage}
                />
              </Router>
                
            );
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
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }

}


function mapStateToProps({ selected_webpage }) {
  return {
    selected_webpage
  }
}



export default connect(mapStateToProps, { fetchWebPage })(ErrorDock);
