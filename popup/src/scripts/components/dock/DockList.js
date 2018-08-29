import React, { Component } from 'react';
import { connect } from  'react-redux';

import DockCard from './DockCard';


class DockList extends Component {

    renderLoader() {
        return (
            <div className="dock__loading">
                <img src="img/wheel.svg" alt="" className="loader loader__large" />
            </div>
        );
    }

    renderList() {
        return (
            <div className="dock__list">
                {
                    this.props.docks.map(({ projectName, _id }) => {
                        return <DockCard
                                     key={_id}
                                     projectName={projectName}
                                     id={_id}
                                />;
                    })
                }
                
            </div>
        );
    }

    render() {
        return (
            <div>
                { (this.props.docks.length === 0) ? this.renderLoader() : this.renderList() }
            </div>
        );
    }
}

function mapStateToProps({ docks }) {
    return {
        docks
    }
}

export default connect(mapStateToProps)(DockList);