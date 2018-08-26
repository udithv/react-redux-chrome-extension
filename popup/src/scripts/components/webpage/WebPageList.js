import React, {Component} from 'react';
import {connect} from 'react-redux';

import WebPageCard from './WebPageCard';

class WebPageList extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
      return this.props.webpages.map(wp => {
        return <WebPageCard webPage={wp} key={wp._id} />
      });
  }
  render() {
      return (
          <div className="dock__list dock__list-webpage">
              {this.props.webpages.length ? this.renderList() : 'No webpages docked yet.'}
          </div>
      );
  }

}


export default WebPageList;
