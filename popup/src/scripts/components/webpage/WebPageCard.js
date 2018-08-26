import React, {Component} from 'react';
import {connect} from 'react-redux';

import { deletePage } from '../../actions';


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

  render() {
      return (
        <div className="dock__card">
            <div className="dock__card-webpage" >
                <img 
                    src={this.props.webPage.favIconUrl} 
                    alt="favicon"
                    className="dock__list-icon left"
                />
                <p className="left" title={this.props.webPage.url} >
                    {this.props.webPage.title}
                </p>
                <a 
                    className="btn__float--small right" 
                    title="Open in new tab" 
                    onClick={this.handleNewTab.bind(this)}
                >
                    <img src="img/open_tab_single.svg" alt="open in new tab" />
                </a>
                <a 
                    className="btn__float--small right" 
                    title="delete webpage"
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
