import React, { Component } from 'react';
import { goBack } from 'route-lite';


class DockView extends Component {
    render() {
        return (
            <div>
                DockView
                {this.props.projectName}
                {this.props.id}
                <div onClick={() => goBack()}>
                    goback
                </div>
            </div>
        );
    }
}

export default DockView;