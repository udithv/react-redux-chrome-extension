import React, {Component} from 'react';
import {connect} from 'react-redux';
import { goTo } from 'route-lite';

import { deletePage } from '../../actions';

import WebPageQRCodeView from './WebPageQRCodeView';

class WebPageCard extends Component {
  constructor(props) {
    super(props);
  }

  handleDelete() {
      this.props.deletePage(this.props.webPage._id, this.props.webPage.dock);
  }

  handleNewTab() {
      window.open(this.props.webPage.url);
  }

  handleWebPageQRCode() {
      const { title, url } = this.props.webPage;
      goTo(WebPageQRCodeView, { title, url })
  }

  render() {
      return (
        <div className="dock__card">
            <div className="dock__card-webpage" >
                <img 
                    src={this.props.webPage.favIconUrl} 
                    alt="favicon"
                    className="dock__list-icon left"
                />
                <p className="left" title={this.props.webPage.title} >
                    {this.props.webPage.title}
                </p>
                <a 
                    className="btn__float--small right" 
                    title="Get QRCode" 
                    onClick={this.handleWebPageQRCode.bind(this)}
                >
                    <img src="img/qrcode.svg" alt="get qrcode" />
                </a>
                <a 
                    className="btn__float--small right" 
                    title={this.props.webPage.url} 
                    onClick={this.handleNewTab.bind(this)}
                >
                    <img src="img/external-link.svg" alt="open in new tab" />
                </a>
                <a 
                    className="btn__float--small right" 
                    title="Delete webpage"
                    onClick={this.handleDelete.bind(this)}
                >
                    <img src="img/delete.svg" alt="delete" />
                </a>
            </div>
        </div>
      );
  }

}


export default connect(null, { deletePage })(WebPageCard);
