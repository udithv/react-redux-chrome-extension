import React, { Component } from 'react';

export default class MenuItem extends Component {
  render() {
      const { name, iconUrl, title } = this.props;
    return (
        <div className="menu__item">
            <a 
                className="btn__float btn__float--small"
                onClick={() => this.props.gothere(name)}
            >
                <img src={iconUrl} alt={name} />
            </a>
            <span className="menu__item-name">
                {title}
            </span>
        </div>
    )
  }
}
