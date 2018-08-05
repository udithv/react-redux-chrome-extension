import React, {Component} from 'react';
import {connect} from 'react-redux';


class WebPageList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      console.log(this.props.webpages);
  return (
            <ul>
                {
                    this.props.webpages.map((wp, i) => {
                        return (
                            <li key={i}>
                                <img src={wp.favIconUrl} alt={wp.title} />
                                {wp.title}
                            </li>
                        );
                    })
                }
            </ul>
         );
  }

}

const mapStateToProps = ({webpages}) => {
    return {
      webpages
    };
  };

export default connect(mapStateToProps)(WebPageList);
