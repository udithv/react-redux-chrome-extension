import React, { Component } from 'react';
import { connect } from  'react-redux';

import DockCard from './DockCard';


class DockList extends Component {
    render() {
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
}

function mapStateToProps({ docks }) {
    return {
        docks
    }
}

export default connect(mapStateToProps)(DockList);