import React, { Component } from 'react';
import { Form, Row, Col, Input, Button, Icon } from 'antd';

class AdvancedSearchForm extends Component {
  state = {
    expand: false,
  };

  getFields() {
    const count = this.state.expand ? 10 : 6;
    const { getFieldDecorator } = this.props.form;
    const children = [];
    for (let i = 0; i < 10; i++) {
      children.push(
        <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
          <Form.Item label={`Field ${i}`}>
            {getFieldDecorator(`field-${i}`, {
              rules: [
                {
                  required: true,
                  message: 'Input something!',
                },
              ],
            })(<Input placeholder="placeholder" />)}
          </Form.Item>
        </Col>,
      );
    }
    return children;
  }

  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };
  render() {
      return (
        <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
        <Row gutter={24}>{this.getFields()}</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              重置
            </Button>
            <span style={{ marginLeft: 8, fontSize: 12, cursor:'pointer' }} onClick={this.toggle}>
              {
                this.state.expand ? "折叠" : "展开"
              }
              <Icon type={this.state.expand ? 'up' : 'down'} />
            </span>
          </Col>
        </Row>
        <style>
          {`
          .ant-advanced-search-form {
            padding: 24px;
            background: #fbfbfb;
            border: 1px solid #d9d9d9;
            border-radius: 6px;
          }
          
          .ant-advanced-search-form .ant-form-item {
            display: flex;
          }
          
          .ant-advanced-search-form .ant-form-item-control-wrapper {
            flex: 1;
          }
          .search-result-list {
            margin-top: 16px;
            border: 1px dashed #e9e9e9;
            border-radius: 6px;
            background-color: #fafafa;
            min-height: 200px;
            text-align: center;
            padding-top: 80px;
          }
          `}
        </style>
      </Form>
    );
  }
}

export default Form.create()(AdvancedSearchForm);