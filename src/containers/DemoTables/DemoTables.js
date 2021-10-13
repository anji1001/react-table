import React, { Component } from 'react';
import Table from '../../components/shared/Table';

class DemoTables extends Component {
  state = {
    simpleTableData: {
      tableHeading: 'Simple Table',
      tableHeadingClass: 'font-weight-normal',
      tableHeadingRowStyling: 'border-bottom',
      tableClass: 'p-1 m-1 border d-inline-block',
      data: [
        { name: 'Dakota Rice', country: 'Niger', city: 'Oud-Turnhout', salary: '$36,738' },
        { name: 'Minerva Hooper', country: 'Curaçao', city: 'Sinaai-Waas', salary: '$23,789' }],
      columns: [
        { title: 'Name', property: 'name', classes: '', headerClass: 'align-left', width: 200},
        { title: 'Country', property: 'country', classes: '', headerClass: 'align-left', width: 200},
        { title: 'City', property: 'city', classes: '', headerClass: 'align-left', width: 200},
        { title: 'Salary', property: 'salary', classes: '', headerClass: 'align-left', width: 200}]
    }
  }
  render() {
    return (
      <Table table={this.state.simpleTableData}>
      </Table>
    );
  }
}

export default DemoTables;
