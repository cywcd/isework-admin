import React from 'react';
import { Table } from 'antd';

const columns = [
    { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
    { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
    { title: 'Column 1', dataIndex: 'address', key: '1' },
    { title: 'Column 2', dataIndex: 'address', key: '2' },
    { title: 'Column 3', dataIndex: 'address', key: '3' },
    { title: 'Column 4', dataIndex: 'address', key: '4' },
    { title: 'Column 5', dataIndex: 'address', key: '5' },
    { title: 'Column 6', dataIndex: 'address', key: '6' },
    { title: 'Column 7', dataIndex: 'address', key: '7' },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <span>action</span>,
    },
];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
}, {
  key: '3',
  name: 'Edrward',
  age: 42,
  address: 'London Park no. 8',
}, {
  key: '4',
  name: 'Joe Black',
  age: 30,
  address: 'Sidney No. 1 Lake Park',
}];

const ColumnfixedTable = () => (
  <div>
    <h4>对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要和 scroll.x 配合使用。</h4>
    <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
  </div>
);

export default ColumnfixedTable;