import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_API_KEY, USER_PROJECT_PATH } from '../../glie.config';
import { PROJECT_DATA_REQUESTED, MILESTONES_REQUESTED } from '../events';

import Subheader from 'material-ui/Subheader';
import AppBar from 'material-ui/AppBar';

import ProjectSettings from './project-settings/project-settings.component';
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
          <ProjectSettings/>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // this.setState({
    //   apiKey: this.apiKeyInput.value,
    //   projectPath: this.projectPathInput.value
    // });
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