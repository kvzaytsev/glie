import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_API_KEY, USER_PROJECT_PATH } from '../../glie.config';

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
            <input type="text" onChange={this.onApiKeyChange} defaultValue={USER_API_KEY} ref={ input => this.apiKeyInput = input } />
          </div>
          <div>
            <label>Project Path</label>
            <input type="text" onChange={this.onProjectPathChange} defaultValue={USER_PROJECT_PATH} ref={ input => this.projectPathInput = input } />
          </div>
          <button onClick={this.onGetProjectDataClick}>Get Project Data</button>
        </div>
        <div>Project ID: {this.props.projectId}</div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      apiKey: this.apiKeyInput.value,
      projectPath: this.projectPathInput.value
    });
  }

  onApiKeyChange(event) {
    this.setState({ ...this.state, apiKey: event.target.value });
  }

  onProjectPathChange(event) {
    this.setState({ ...this.state, projectPath: event.target.value });
  }

  onGetProjectDataClick() {
    this.props.requestProjectData(this.state);
  }

}

export default connect(
  state => ({
    projectId: state.projectId
  }),
  dispatch => ({
    requestProjectData: ({apiKey, projectPath}) => {
      dispatch({
        type: 'PROJECT_DATA.REQUESTED',
        payload: { apiKey, projectPath }
      });
    }
  })
)(Application);