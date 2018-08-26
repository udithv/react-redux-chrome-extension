import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'route-lite';

import { getWebPages } from '../../actions';

import WebPageList from '../webpage/WebPageList';

class DockView extends Component {

    componentWillMount() {
        this.props.getWebPages(this.props.id);
    }

    renderHeading() {
        return (
            <div className="dock__heading">
                {this.props.projectName}
            </div>
        );
    }

    renderUtilityButton() {
        return (
            <div className="footer">
                <div className="footer-nav">
                    <a 
                        onClick={() => goBack()} 
                        className="btn__float btn__float--medium"
                        title="Go Back"
                    >
                        <img src="img/back-arrow.svg" alt="dockit" />
                    </a>
                    <a 
                        className="btn__float btn__float--medium"
                        title="Open all webpages"
                    >
                        <img src="img/open_tab_multiple.svg" alt="dockit"/>
                    </a>
                    <a 
                        className="btn__float btn__float--medium"
                        title="Delete dock"
                    >
                        <img src="img/delete.svg" alt="dockit"/>
                    </a>
                </div>
            </div>
        );
    }



    render() {
        return (
            <div className="dock__view" >
                {this.renderHeading()}
                <WebPageList /* dockid={this.props.id} */ webpages={this.props.webpages} />
                {this.renderUtilityButton()}
            </div>
        );
    }
}

function mapStateToProps({ webpages }) {
    return {
        webpages
    }
}

export default connect(mapStateToProps, { getWebPages })(DockView);