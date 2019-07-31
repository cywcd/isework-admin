import React from 'react';
import { Table, Button } from 'antd';
import { getBbcNews } from '../../axios';

const columns = [{
    title: '新闻标题',
    dataIndex: 'title',
    width: 100,
    render: (text, record) => <a href={record.url} target="_blank" rel="noopener noreferrer">{text}</a>
}, {
    title: '作者',
    dataIndex: 'author',
    width: 80
}, {
    title: '发布时间',
    dataIndex: 'publishedAt',
    width: 80
}, {
    title: '描述',
    dataIndex: 'description',
    width: 200
}];

class AsynchronousTable extends React.Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
        data: []
    };
    componentDidMount() {
        this.start();
    }
    start = () => {
        this.setState({ loading: true });
        getBbcNews().then(({ articles }) => {
            this.setState({
                data: articles,
                loading: false
            });
        });
    };
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
              <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={this.start}
                        disabled={loading} loading={loading}
                >Reload</Button>
                <span style={{ marginLeft: 8 }}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
              </div>
              <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
            </div>
        );
    }
}

export default AsynchronousTable;