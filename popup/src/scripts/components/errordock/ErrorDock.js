import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Store } from 'react-chrome-redux';

//Components
import WebPageList from '../webpagelist/WebPageList';

const proxyStore = new Store({
  portName: 'errordock'
});

class ErrorDock extends Component {
  constructor(props) {
    super(props);
  }

  renderDockHeader() {
    return (
      <div className="dock__header">
          <img 
            src="img/boat-from-front-view.svg"
            alt="icon-left" 
            className="dock__header-icon-logo left"
          />
          <span className="dock__header-title left">
              ErrorDock
          </span>
          <img src="img/turn-off.svg"
               alt="icon-left" 
               className="dock__header-icon-logout right"
               onClick={() => window.open("http://localhost:5000/api/logout")} 
          />
      </div>
    );
  }

  renderDockForm() {

    return (
      <div className="dock__form">
            <form  className="form">
                <div className="form__group">
                    <input 
                        type="text"
                        className="form__input" 
                        placeholder="Title" 
                        value="ErrorDock" 
                    />
                    <label  className="form__label">Title</label>
                </div>
                <div className="form__group">
                    <input 
                        type="text"
                        className="form__input" 
                        placeholder="URL"  
                        value="https://www.errordock.com"
                        disabled 
                    />
                    <label  className="form__label">Url</label>
                </div>
                <div className="form__group">
                    <a className="btn__floating">
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

  renderDock(){
    return (
      <div>
        {this.renderDockHeader()}
        {this.renderDockForm()}
      </div> 
    );
  }

  render() {
    return (
      <div>
        {this.renderDock()}
      </div>
    );
  }

}



export default ErrorDock;
