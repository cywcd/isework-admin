import React, { Component } from 'react';
import { Card, Form , Row, Col } from 'antd';
import BreadcrumbComon from '../BreadcrumbComon';
import DiyValidateForm from './DiyValidateForm';
import ContactForm from './ContactForm';
import LayoutForm from './LayoutForm';

class VariousForm extends Component {    
    render() {        
        return (
        <div className="gutter-example">
            <BreadcrumbComon first="表单" second="综合表单" />
            <Row gutter={16}>
              <Col className="gutter-row" md={24}>
                  <div className="gutter-box">
                      <Card title="表单自定义校验" bordered={false}>
                      <h4>提供了 validateStatus help hasFeedback 等属性，你可以不需要使用 Form.create 和 getFieldDecorator，自己定义校验的时机和内容。</h4>
                        <p>1. validateStatus: 校验状态，可选 'success', 'warning', 'error', 'validating'。<br />2. hasFeedback：用于给输入框添加反馈图标。<br />3. help：设置校验文案。</p>
                        <DiyValidateForm />
                      </Card>                      
                  </div>
              </Col>
              <Col className="gutter-row" md={12}>
                  <div className="gutter-box">
                      <Card title="表单联动" bordered={false}>
                        <h4>使用 setFieldsValue 来动态设置其他控件的值。</h4>
                        <ContactForm />                
                      </Card>
                  </div>
              </Col>
              <Col className="gutter-row" md={12}>
                  <div className="gutter-box">
                      <Card title="表单布局" bordered={false}>
                        <h4>表单有三种布局。</h4>
                        <LayoutForm />                
                      </Card>
                  </div>
              </Col>              
            </Row>
        </div>
        )
    }
}

export default Form.create()(VariousForm);