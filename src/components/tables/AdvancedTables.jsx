import React from 'react';
import { Row, Col, Card } from 'antd';
import MergeTable from './MergeTable';
import ExpandedTable from './ExpandedTable';
import EditableTable from './EditableTable';
import HeaderfixedTable from './HeaderfixedTable'
import ColumnfixedTable from './ColumnfixedTable';
import AsynchronousTable from './AsynchronousTable';
import BreadcrumbComon from '../BreadcrumbComon';

class AdvancedTables extends React.Component {
    render() {
        return (
            <div className="gutter-example">
                <BreadcrumbComon first="表格" second="高级表格" />
                <Row gutter={16}>
                  <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="行/列合并" bordered={false}>
                                <MergeTable />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                  <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="可展开" bordered={false}>
                                <ExpandedTable />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="可编辑" bordered={false}>
                                <EditableTable />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                  <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="固定表头" bordered={false}>
                                <HeaderfixedTable />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="固定列" bordered={false}>
                                <ColumnfixedTable />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="异步表格--BBC新闻今日热门" bordered={false}>
                                <AsynchronousTable />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AdvancedTables;