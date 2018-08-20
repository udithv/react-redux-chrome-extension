import React, { Component } from 'react';

class DockCreate extends Component {
    render () {
        return (
            <div className="dock-create__form">
                <form className="form">
                    <div className="form__group-inline">
                        <input type="text" className="form__input-inline" placeholder="Dock Name" />
                        <button className="btn-submit-inline btn-submit-inline--small">
                            <img className="btn-submit-inline__icon" src="img/plus-black-symbol.svg" alt="dockit" />
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default DockCreate;