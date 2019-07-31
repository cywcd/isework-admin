import React from 'react';
import { Table, Icon, Button, Tag } from 'antd';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <span>{text}</span>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => {
        let color = tag.length > 5 ? 'geekblue' : 'green';
        if (tag === 'loser') {
          color = 'volcano';
        }
        return (
          <Tag color={color} key={tag}>
            {tag.toUpperCase()}
          </Tag>
        );
      })}
    </span>
  ),
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
            <Button type="primary" size="small">Action 一 {record.name}</Button>
            <span className="ant-divider" />
            <Button type="danger" size="small">Delete</Button>
            <span className="ant-divider" />
            <Button type="link" size="small" className="ant-dropdown-link">
                More actions <Icon type="down" />
            </Button>
        </span>
    ),
}];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
}];

const BasicTable = () => (
    <Table columns={columns} dataSource={data} />
);

export default BasicTable;