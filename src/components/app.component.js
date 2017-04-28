import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_API_KEY, USER_PROJECT_PATH } from '../../glie.config';
import { PROJECT_DATA_REQUESTED, MILESTONES_REQUESTED } from '../events';

import Subheader from 'material-ui/Subheader';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

import Styles from './app.component.css';

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
    this.onGetMilestonesClick = this.onGetMilestonesClick.bind(this);
  }

  render() {
    return (
      <div>
        <AppBar 
          title="GitLab Issue Exporting Tool" 
          iconElementLeft={<span/>}
        />
        <div>
          <Subheader>Authentication Info</Subheader>
          <TextField
            hintText="GitLab API Key"
          />
          <div>
            <label>API Key</label>
            <input
              type="text"
              onChange={this.onApiKeyChange}
              defaultValue={USER_API_KEY}
              ref={input => this.apiKeyInput = input}
            />
          </div>
          <div>
            <label>Project Path</label>
            <input
              type="text"
              onChange={this.onProjectPathChange}
              defaultValue={USER_PROJECT_PATH}
              ref={input => this.projectPathInput = input}
            />
          </div>
          <button onClick={this.onGetProjectDataClick}>Get Project Data</button>
          <br />
          <button onClick={this.onGetMilestonesClick}>Get Milestones</button>
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

  onGetMilestonesClick() {
    this.props.requestMilestones({
      projectId: this.props.projectId,
      apiKey: this.props.apiToken
    });
  }

}

export default connect(
  state => ({
    projectId: state.project ? state.project.id : null,
    apiToken: state.apiToken
  }),
  dispatch => ({
    requestProjectData: ({ apiKey, projectPath }) => {
      dispatch({
        type: PROJECT_DATA_REQUESTED,
        payload: { apiKey, projectPath }
      });
    },
    requestMilestones: (payload) => {
      dispatch({
        type: MILESTONES_REQUESTED,
        payload
      });
    }
  })
)(Application);