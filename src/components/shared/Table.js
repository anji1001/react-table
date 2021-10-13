import React from 'react';
import TableColumn from './TableColumn';
import Aux from '../../hoc/Auxiliary';
import styles from './Table.css';

const table = (props) => {
  const columns = props.table.columns;
  const data = props.table.data;
  const width = props.width ? props.width : 150;
  const reducer = (acc, curr) => `${acc} ${styles[curr]}`;
  const tableClass = props.table.tableClass.split(' ').reduce(reducer, '');
  const tableHeadingClass = props.table.tableHeadingClass.split(' ').reduce(reducer, '');
  const tableHeadingRowStyling = props.table.tableHeadingRowStyling.split(' ').reduce(reducer, '');

  return(
    <Aux>
      <div className={tableClass}><h3 className={tableHeadingClass + `${styles['font-weight-normal']}`}>{props.table.tableHeading}</h3>
        <table className={styles['border-collapse']}>
          <thead>
            <tr className={tableHeadingRowStyling}>
              {columns.map((column, index) => <TableColumn title={column.title} key={index} headerClass={column.headerClass} width={width}/>)}
            </tr>
          </thead>
          <tbody>
            {data.map((row, id) => <tr className={styles['border-bottom'] }key={id}>{columns.map((column, index) => <td key={index} width={width}>{row[column.property]}</td>)}</tr>)}
          </tbody>
        </table></div>
    </Aux>
  )
};

export default table;