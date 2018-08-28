import React, { Component } from 'react';
import { goBack } from 'route-lite';

class DockDelete extends Component {
    render() {
        return (
            <div>
                Are you sure you wanna delete 
                {this.props.projectName} ?
                {this.props.id}

                <button>
                    Yes
                </button>
                <button onClick={() => goBack()}>
                    Cancel
                </button>
            </div>
        );
    }
}

export default DockDelete;