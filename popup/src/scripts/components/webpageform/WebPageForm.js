import React, { Component } from 'react';

class WebPageForm extends Component {
    render() {
        const { url, title } = this.props.webpage;
        return(
            <div className="dock__form">
                <form  className="form">
                    <div className="form__group">
                        <input 
                            type="text"
                            className="form__input" 
                            placeholder="Title" 
                            value={title} 
                        />
                        <label  className="form__label">Title</label>
                    </div>
                    <div className="form__group">
                        <input 
                            type="text"
                            className="form__input" 
                            placeholder="URL"  
                            value={url}
                            disabled 
                        />
                        <label  className="form__label">Url</label>
                    </div>
                    <div className="form__group">
                        <a 
                            className="btn__float btn__float--small"
                            onClick={() => this.props.changePage('docks')}
                        >
                            <img 
                            src="img/sea-ship-with-containers.svg"
                            alt="dockit" 
                            />
                        </a> 
                        <span className="dock__name">
                            project-sea-serpent
                        </span>
                    </div>
                    <div className="form__group">
                        <textarea rows="3"className="form__input" placeholder="Description" />
                        <label for="description" className="form__label">Description</label>
                    </div>
                    <div className="form__group">
                        <button className="btn-submit">
                            <img 
                                className="btn-submit__icon" 
                                src="img/big-anchor.svg" 
                                alt="dockit"
                            />
                            <span className="btn-submit__text">
                                Dock it
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default WebPageForm;