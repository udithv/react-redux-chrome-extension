import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goBack, goTo } from 'route-lite';

import { getWebPages, openTabs, clearWebpages } from '../../actions';

import WebPageList from '../webpage/WebPageList';
import DockDelete from './DockDelete';

class DockView extends Component {

    componentWillMount() {
        this.props.getWebPages(this.props.id);
    }

    componentWillUnmount() {
        this.props.clearWebpages();
    }

    handleMultiple() {
        this.props.openTabs(this.props.webpages.map(wp => wp.url));
    }

    renderHeading() {
        return (
            <div className="dock__heading">
                {this.props.projectName}
            </div>
        );
    }

    renderUtilityButton() {
        const { projectName, id } = this.props;

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
                        onClick={this.handleMultiple.bind(this)}
                    >
                        <img src="img/open_tab_multiple.svg" alt="dockit"/>
                    </a>
                    <a 
                        className="btn__float btn__float--medium"
                        title="Delete dock"
                        onClick={() => goTo(DockDelete, { projectName, id })}
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
                <WebPageList webpages={this.props.webpages} />
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

export default connect(mapStateToProps, { getWebPages, openTabs, clearWebpages })(DockView);