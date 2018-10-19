import React, {Component} from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  renderLoginContent() {
    return (
        <div className="login">
            <div className="login__logo-box">
                <img className="login__logo" src="img/loginbanner.svg" alt="svg image" />
            </div>
            <div className="u-margin-bottom-small">
                <a 
                  className="btn btn--animated btn--primary btn--blue-border"
                  onClick={() =>  window.open("https://errordock.herokuapp.com/auth/google")/* window.open("http://localhost:5000/auth/google") */}
                > 
                        <img className="btn__icon" src="img/google-plus.svg" alt="sign-in-google" /> 
                        <span className="btn__content-text">
                            Sign In with Google
                        </span>
                </a>
            </div>
            <div className="u-margin-bottom-small">
                <a 
                  className="btn btn--animated btn--primary btn--blue-border"
                  onClick={() =>  window.open("https://errordock.herokuapp.com/auth/github")/* window.open("http://localhost:5000/auth/github") */}
                > 
                    
                    <img className="btn__icon" src="img/github.svg" alt="sign-in-github" /> 
                    <span className="btn__content-text">
                        Sign In with Github
                    </span>
                </a>
            </div>
        </div>
    );

  }

  render() {
    return(
      <div>
          <header className="chrome-ext__header u-margin-top-small">
            ErrorDock
          </header>
          {this.renderLoginContent()}
      </div>
    )
  }

}



export default Login;
