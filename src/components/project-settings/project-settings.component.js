import React, { Component } from 'react';

import Styles from './project-settings.component.css';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import { USER_API_KEY, USER_PROJECT_PATH } from '../../../glie.config';

class ProjectSettings extends Component {

  constructor(props) {
    super(props);
    this.bindMethods();
  }

  bindMethods() {

  }
  
  render() {
    return (
      <div className={Styles.root}>
        <TextField defaultValue={USER_API_KEY} className={Styles['text-field']} hintText="Enter your api key here..." floatingLabelText="GitLab API Key" floatingLabelFixed={true}/>
        <TextField defaultValue={USER_PROJECT_PATH} className={Styles['text-field']} hintText="Enter your project path here..." floatingLabelText="Project Path" floatingLabelFixed={true} />
        <div className={Styles['button-wrap']}>
          <FlatButton label="Refresh Project Data" primary={true} />
        </div>
      </div>
    )
  }    

}

export default ProjectSettings;