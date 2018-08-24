import React, { Component } from 'react';
import { connect } from 'react-redux';

class WebPageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.webpage.title,
            url: props.webpage.url,
            description: '',
            submitted: false
        }
    }

    //hack for intializing state with props
    componentWillReceiveProps(nextProps){
        if (nextProps.webpage.url !== this.props.webpage.url) {
          this.setState({ title: nextProps.webpage.title, url: nextProps.webpage.url })
        }
      }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    renderSubmitButton() {
        return (
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
        );
    }


    render() {
        const { url, title } = this.props.webpage;
        return(
            <div className="dock__form">
                <form  className="form" onSubmit={this.handleSubmit.bind(this)} >
                    <div className="form__group">
                        <input 
                            type="text"
                            className="form__input" 
                            placeholder="Title" 
                            value={this.state.title}
                            onInput={event => this.setState({ title: event.target.value })}
                            disabled={this.state.submitted}
                        />
                        <label  className="form__label">Title</label>
                    </div>
                    <div className="form__group">
                        <input 
                            type="text"
                            className="form__input" 
                            placeholder="URL"  
                            value={this.state.url}
                            onInput={event => this.setState({ url: event.target.value })}
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
                            {this.props.current_dock ? this.props.current_dock.projectName : 'no current dock'}
                        </span>
                    </div>
                    <div className="form__group">
                        <textarea 
                            rows="3"
                            className="form__input" 
                            placeholder="Description" 
                            onInput={event => this.setState({ description: event.target.value })}
                            value={this.state.description}
                            disabled={this.state.submitted}
                        />
                        <label className="form__label">Description</label>
                    </div>
                    <div className="form__group">
                        {this.state.submitted ? 'loader' : this.renderSubmitButton() }
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps({ current_dock }) {
    return {
        current_dock
    }
}

export default connect(mapStateToProps)(WebPageForm);