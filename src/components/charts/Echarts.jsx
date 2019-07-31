import React from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbComon from '../BreadcrumbComon';
import EchartsCandlestick from './EchartsCandlestick';
import EchartsLine from './EchartsLine';
import EchartsBar from './EchartsBar';
import EchartsPie from './EchartsPie';
import EchartsGEOmap from './EchartsGEOmap';
import EchartsScatter from './EchartsScatter';

class Echarts extends React.Component {
    render() {
        return (
            <div className="gutter-example">
               <BreadcrumbComon first="图表" second="echarts" />
               <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="折线图" bordered={false}>
                              <EchartsLine />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="柱状图" bordered={false}>
                              <EchartsBar />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                          <Card title="饼图" bordered={false}>
                                <EchartsPie />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="散点图" bordered={false}>
                                <EchartsScatter />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="地图散点" bordered={false}>
                                <EchartsGEOmap />
                            </Card>
                        </div>
                    </Col>
                </Row>
               <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="k线图" bordered={false}>
                                <EchartsCandlestick />
                            </Card>
                        </div>
                    </Col>
                </Row>              
            </div>
        )
    }
}

export default Echarts;