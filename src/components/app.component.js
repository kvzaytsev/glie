import React, { Component } from 'react';
import { connect } from 'react-redux';

class Application extends Component {
  constructor(props) {
    super(props);

    this.bindMethods();
    this.state = {
      apiKey: null,
      projectPath: null
    }
  }

  bindMethods() {
    this.onApiKeyChange = this.onApiKeyChange.bind(this);
    this.onProjectPathChange = this.onProjectPathChange.bind(this);
    this.onGetProjectDataClick = this.onGetProjectDataClick.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Gitlab issue exporting tool</h1>
        <div>
          <div>
            <label>API Key</label>
            <input type="text" onChange={this.onApiKeyChange} />
          </div>
          <div>
            <label>Project Path</label>
            <input type="text" onChange={this.onProjectPathChange} />
          </div>
          <button onClick={this.onGetProjectDataClick}>Get Project Data</button>
        </div>
        <div>Project ID: {this.props.projectId}</div>
      </div>
    );
  }

  onApiKeyChange(event) {
    this.setState({ ...this.state, apiKey: event.target.value });
  }

  onProjectPathChange(event) {
    this.setState({ ...this.state, projectPath: event.target.value });
  }

  onGetProjectDataClick() {
    console.log(this.state);
  }

}

export default connect((state, ownProps) => ({
  projectId: state.projectId
}))(Application);