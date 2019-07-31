import React from 'react';
import { Row, Col, Card } from 'antd';
import BasicTable from './BasicTable';
import SizeTable from './SizeTable';
import BorderTable from './BorderTable'
import SelectTable from './SelectTable';
import SortTable from './SortTable';
import SearchTable from './SearchTable';
import RemoteTable from './RemoteTable';
import BreadcrumbComon from '../BreadcrumbComon';

const BasicTables = () => (
    <div className="gutter-example">
        <BreadcrumbComon first="表格" second="基础表格" />
        <Row gutter={16}>
            <Col className="gutter-row" md={24}>
                <div className="gutter-box">
                    <Card title="基础用法" bordered={false}>
                        <BasicTable />
                    </Card>
                </div>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col className="gutter-row" md={24}>
                <div className="gutter-box">
                    <Card title="紧凑型表格" bordered={false}>
                        <SizeTable />
                    </Card>
                </div>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col className="gutter-row" md={24}>
                <div className="gutter-box">
                    <Card title="带边框、页头和页脚表格" bordered={false}>
                        <BorderTable />
                    </Card>
                </div>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col className="gutter-row" md={24}>
                <div className="gutter-box">
                    <Card title="选择和操作" bordered={false}>
                        <SelectTable />
                    </Card>
                </div>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col className="gutter-row" md={12}>
                <div className="gutter-box">
                    <Card title="自定义筛选菜单" bordered={false}>
                        <SortTable />
                    </Card>
                </div>
            </Col>
            <Col className="gutter-row" md={12}>
                <div className="gutter-box">
                    <Card title="可控的筛选和排序" bordered={false}>
                        <SearchTable />
                    </Card>
                </div>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col className="gutter-row" md={24}>
                <div className="gutter-box">
                    <Card title="远程加载数据" bordered={false}>
                        <RemoteTable />
                    </Card>
                </div>
            </Col>
        </Row>
    </div>
);

export default BasicTables;