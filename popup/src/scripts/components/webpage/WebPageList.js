import React, {Component} from 'react';

import WebPageCard from './WebPageCard';

class WebPageList extends Component {
  

  renderList() {
      return this.props.webpages.map(wp => {
        return <WebPageCard webPage={wp} key={wp._id} />
      });
  }

  renderContent() {
    if(this.props.webpages == null){
        return <div>loading</div>;
    }else if(this.props.webpages.length === 0){
        return <div>No webpages yet</div>
    }else {
        return this.props.webpages.map(wp => {
            return <WebPageCard webPage={wp} key={wp._id} />
          });
    }
  }

  render() {
      console.log(this.props.webpages);
      return (
          <div className="dock__list dock__list-webpage">
               {/* this.props.webpages.length ? this.renderList() : 'No webpages docked yet.' */} 
               {this.renderContent()}
          </div>
      );
  }

}

export default WebPageList;


