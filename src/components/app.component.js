import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_API_KEY, USER_PROJECT_PATH } from '../../glie.config';
import { PROJECT_DATA_REQUESTED, MILESTONES_REQUESTED } from '../events';

import AppBar from 'material-ui/AppBar';

import ProjectSettings from './project-settings/project-settings.component';
import Milestones from './milestones/milestones.component';

import Styles from './app.component.css';

class Application extends Component {
  constructor(props) {
    super(props);

    this.bindMethods();
  }

  bindMethods() {}

  render() {
    return (
      <div>
        <AppBar title="GitLab Issue Exporting Tool" iconElementLeft={<span/>} />
        <ProjectSettings apiKey={USER_API_KEY} projectPath={USER_PROJECT_PATH}/>  
        <Milestones milestones={this.props.milestones} />
      </div>
    );
  }

}

export default connect(
  state => ({
    milestones: state.milestones
  })
)(Application);