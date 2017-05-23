import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_API_KEY, USER_PROJECT_PATH } from '../../glie.config';
import { PROJECT_DATA_REQUESTED, MILESTONES_REQUESTED } from '../events';

import AppBar from 'material-ui/AppBar';

import ProjectSettings from './project-settings/project-settings.component';
import Milestones from './milestones/milestones.component';
import Chip from 'material-ui/Chip';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

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
        <AppBar title="GITLab Issue Exporting Tool" iconElementLeft={<span/>} />
        <ProjectSettings apiKey={USER_API_KEY} projectPath={USER_PROJECT_PATH}/>  
        <Milestones milestones={this.props.milestones} />
        
        <Table
          fixedHeader={true}
          fixedFooter={true}
          selectable={false}
          multiSelectable={false}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
          >
            <TableRow>
              <TableHeaderColumn style={{width:'10%'}}>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Assignee</TableHeaderColumn>
              <TableHeaderColumn>Labels</TableHeaderColumn>
              <TableHeaderColumn style={{width:'10%'}}>Status</TableHeaderColumn>
              <TableHeaderColumn>Last Update</TableHeaderColumn>

            </TableRow>
          </TableHeader>

          <TableBody
            displayRowCheckbox={false}
            showRowHover={true}
            stripedRows={false}
          >
            {
              this.props.issues.map(issue => (
                <TableRow key={issue.id}>
                  <TableRowColumn style={{width:'10%'}}>{issue.iid}</TableRowColumn>
                  <TableRowColumn>{issue.title}</TableRowColumn>
                  <TableRowColumn> 
                    <pre>{issue.description}</pre>
                  </TableRowColumn>
                  <TableRowColumn>{issue.assignee ? issue.assignee.name : '-'}</TableRowColumn>
                  <TableRowColumn>
                    {
                      issue.labels.map(label => <Chip style={{margin:'5px'}}>{label}</Chip>)
                    }
                  </TableRowColumn>
                  <TableRowColumn style={{width:'10%'}}>{issue.state}</TableRowColumn>
                  <TableRowColumn>{issue.updated_at}</TableRowColumn>
                </TableRow>
              ))
            }
              
          </TableBody>
        </Table>
      </div>
    );
  }

}

export default connect(
  state => ({
    milestones: state.milestones,
    issues: state.issues
  })
)(Application);