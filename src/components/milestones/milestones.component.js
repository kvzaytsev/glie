import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MILESTONES_REQUESTED, ISSUES_REQUESTED } from '../../events';

import Styles from './milestones.component.css';

import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

class ProjectSettings extends Component {

  constructor(props) {
    super(props);

    this.bindMethods();
    this.state = {
      milestone: 'nope',
      milestoneText: '',
      includeComments: false
    };
  }

  bindMethods() {
    this.getMilestoneList = this.getMilestoneList.bind(this);
    this.onMilestoneChange = this.onMilestoneChange.bind(this);
    this.onIncludeCommentsChange = this.onIncludeCommentsChange.bind(this);
    this.onRetrieveIssuesClick = this.onRetrieveIssuesClick.bind(this);
  }

  render() {
    return (
      <div className={Styles.root}>

        <SelectField 
          className={Styles['select-field']} 
          disabled={this.props.milestones.length === 0} 
          value={this.state.milestone} 
          floatingLabelText="Milestone" 
          onChange={this.onMilestoneChange}
        >
          {
            this.getMilestoneList().map(milestone => <MenuItem value={milestone.value} primaryText={milestone.text} key={milestone.key} /> )
          }
        </SelectField>

        <SelectField 
          className={Styles['select-field']} 
          floatingLabelText="Include Comments?" 
          value={this.state.includeComments} 
          onChange={this.onIncludeCommentsChange} 
        >
          <MenuItem value={false} primaryText="No" />
          <MenuItem value={true} primaryText="Yes" />
        </SelectField>

        <div className={Styles['button-wrap']}>
            <FlatButton 
              label="Retrieve Issues" 
              primary={true} 
              onTouchTap={this.onRetrieveIssuesClick} 
            />
        </div>

      </div>
    );
  }

  onMilestoneChange(event, key, value) {
    this.setState({ milestone: value, milestoneText: event.target.innerText });
  }

  onIncludeCommentsChange(event, key, value) {
    this.setState({ includeComments: value });
  }

  onRetrieveIssuesClick() {
    this.props.requestIssues(this.state);
  }

  getMilestoneList() {
    let milestoneList = [{ value: 'nope', text: 'No milestone', key: 'Default Item' }];

    return milestoneList.concat(this.props.milestones
      ? this.props.milestones.map(milestone => ({ value: milestone.iid, text: milestone.title, key: milestone.id }))
      : []
    )
  }

}

export default connect(
  state => ({}),
  dispatch => ({
    requestMilestones: (payload) => {
      dispatch({
        type: MILESTONES_REQUESTED,
        payload
      });
    },
    requestIssues: (state) => {
      dispatch({
        type: ISSUES_REQUESTED,
        payload: {
          milestoneText: state.milestoneText  === "No milestone" ? "" : state.milestoneText,
          includeComments: state.includeComments
        }
      });
    }
  })
)(ProjectSettings);