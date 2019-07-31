import React, { Component } from 'react';
import { Card, Form , Row, Col } from 'antd';
import BreadcrumbComon from '../BreadcrumbComon';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import ModalForm from './ModalForm';
import HorizontalForm from './HorizontalForm';
import AdvancedSearchForm from './AdvancedSearchForm'


class BasicForms extends Component {    
    render() {        
        return (
        <div className="gutter-example">
            <BreadcrumbComon first="表单" second="基础表单" />
            <Row gutter={16}>
              <Col className="gutter-row" md={12}>
                  <div className="gutter-box">
                      <Card title="登录表单" bordered={false}>
                        <LoginForm />
                      </Card>
                      <Card title="水平表单" bordered={false} className="mt-m">
                        <HorizontalForm />
                      </Card>
                      <Card title="弹层表单" bordered={false} className="mt-m">
                        <ModalForm />
                      </Card>
                  </div>
              </Col>
              <Col className="gutter-row" md={12}>
                  <div className="gutter-box">
                      <Card title="注册表单" bordered={false}>
                        <RegisterForm />
                      </Card>
                  </div>
              </Col>
            </Row>
            <Row gutter={16}>
                <Col className="gutter-row" md={24}>
                    <div className="gutter-box">
                      <Card title="高级搜索表单" bordered={false}>
                        <AdvancedSearchForm />
                        <div className="search-result-list">Search Result List</div>
                      </Card>
                    </div>
                </Col>                
            </Row>
        </div>
        )
    }
}

const BasicForm = Form.create()(BasicForms);

export default BasicForm;