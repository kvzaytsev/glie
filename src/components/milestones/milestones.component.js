import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MILESTONES_REQUESTED } from '../../events';

import Styles from './milestones.component.css';

import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class ProjectSettings extends Component {

  constructor(props) {
    super(props);

    this.bindMethods();
    this.state = {
      selected: 'nope'
    };
  }

  bindMethods() {
    this.getMilestoneList = this.getMilestoneList.bind(this);
    this.onMilestoneChange = this.onMilestoneChange.bind(this);
  }

  render() {
    return (
      <div className={Styles.root}>

        <Subheader>Select Milestone</Subheader>

        <SelectField disabled={this.props.milestones.length === 0} value={this.state.selected} floatingLabelText="Frequency" onChange={this.onMilestoneChange}>
          {
            this.getMilestoneList().map(milestone =>
              <MenuItem value={milestone.value} primaryText={milestone.text} key={milestone.key} />
            )
          }
        </SelectField>
      </div>
    );
  }

  onMilestoneChange(event, key, value) {
    this.setState({selected: value});
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
    }
  })
)(ProjectSettings);