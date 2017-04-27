import React, { Component } from 'react';

class Application extends Component {
  constructor(props) {
    super(props);
    
    this.bindMethods();
  }

  bindMethods() {

  }

  render() {
    return (
      <div>
        <h1>Gitlab issue exporting tool</h1>
        <ul>
          <li>
            <label>API Key</label>
            <input className="js-api-key" />
          </li>
          <li>
            <label>Project Path</label>
            <input className="js-project-path" />
          </li>
        </ul>
      </div>
    );
  }

}

export default Application;