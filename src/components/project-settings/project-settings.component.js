import React, { Component } from 'react';
import { connect } from 'react-redux';

import Styles from './project-settings.component.css';

import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import { PROJECT_DATA_REQUESTED, MILESTONES_REQUESTED} from '../../events';

class ProjectSettings extends Component {

  constructor(props) {
    super(props);

    this.bindMethods();
    this.state = {
      apiKey: props.apiKey,
      projectPath: props.projectPath
    }
  }

  bindMethods() {
    this.onApiKeyChange = this.onApiKeyChange.bind(this);
    this.onProjectPathChange = this.onProjectPathChange.bind(this);
    this.onGetProjectDataClick = this.onGetProjectDataClick.bind(this);
  }
  
  render() {
    return (
      <div className={Styles.root}>
        <Subheader>Authentication Info</Subheader>

        <div className={Styles.content}>
          <TextField 
            defaultValue={this.state.apiKey}
            className={Styles['text-field']}
            hintText="Enter your api key here..."
            floatingLabelText="GitLab API Key"
            floatingLabelFixed={true} />

          <TextField
            defaultValue={this.state.projectPath}
            className={Styles['text-field']}
            hintText="Enter your project path here..."
            floatingLabelText="Project Path"
            floatingLabelFixed={true} />
          
          <div className={Styles['button-wrap']}>
            <FlatButton 
              label="Refresh Project Data" 
              primary={true} 
              onTouchTap={this.onGetProjectDataClick} />
          </div>
        </div>

      </div>
    )
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
    projectId: state.project 
      ? state.project.id 
      : null,
    apiToken: state.apiToken
  }),
  dispatch => ({
    requestProjectData: ({ apiKey, projectPath }) => {
      dispatch({
        type: PROJECT_DATA_REQUESTED,
        payload: { apiKey, projectPath }
      });
    }
  })
)(ProjectSettings);