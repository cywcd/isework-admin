import React from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbComon from '../BreadcrumbComon';
import RechartDashedLineChart from './RechartDashedLineChart';
import RechartStackedAreaChart from './RechartStackedAreaChart';
import RechartBarChartWithMinHeight from './RechartBarChartWithMinHeight';
import RechartsRadarChart from './RechartsRadarChart';

class Recharts extends React.Component {
    render() {
        return (
            <div className="gutter-example">
              <BreadcrumbComon first="图表" second="recharts" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="虚线折线图" bordered={false} extra={<a href="http://recharts.org/zh-CN/examples" target="_blank" rel="noopener noreferrer">更多示例</a>}>
                                <RechartDashedLineChart />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="多区域图" bordered={false}  extra={<a href="http://recharts.org/zh-CN/examples" target="_blank" rel="noopener noreferrer">更多示例</a>}>
                                <RechartStackedAreaChart />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="基础柱状图" bordered={false} extra={<a href="http://recharts.org/zh-CN/examples" target="_blank" rel="noopener noreferrer">更多示例</a>}>
                                <RechartBarChartWithMinHeight />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="属性比例图" bordered={false} extra={<a href="http://recharts.org/zh-CN/examples" target="_blank" rel="noopener noreferrer">更多示例</a>}> 
                                <RechartsRadarChart />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Recharts;