import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addDock } from '../../actions';

class DockCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projectName: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addDock(this.state);

    }


    render () {
        return (
            <div className="dock-create__form">
                <form className="form" onSubmit={this.handleSubmit.bind(this)} >
                    <div className="form__group-inline">
                        <input 
                            type="text" 
                            className="form__input-inline" 
                            placeholder="Dock Name"
                            onChange={ e => this.setState({ projectName: e.target.value })}
                            value={this.state.projectName}
                        />
                        <button className="btn-submit-inline btn-submit-inline--small">
                            <img className="btn-submit-inline__icon" src="img/plus-black-symbol.svg" alt="dockit" />
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addDock })(DockCreate);