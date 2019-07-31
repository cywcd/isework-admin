import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const HeaderfixedTable = () => (
  <div>
    <h4>方便一页内展示大量数据。
需要指定 column 的 width 属性，否则列头和内容可能不对齐。如果指定 width 不生效，请尝试建议留一列不设宽度以适应弹性布局，或者检查是否有超长连续字段破坏布局。</h4>
  <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 265 }} />
  </div>
);

export default HeaderfixedTable;


