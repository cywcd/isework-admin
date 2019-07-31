import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbComon from '../BreadcrumbComon';
import QRCodecom from 'qrcode.react'
const { Meta } = Card;

class QRCode extends Component {
  render(){
    return(
      <div className="gutter-example">
        <BreadcrumbComon first="组件" second="二维码" />
        <Row gutter={16}>
          <Col className="gutter-row" md={8}>
            <div className="gutter-box">
              <Card title="二维码case1" bordered={false} bodyStyle={{textAlign:'center'}} >
                <QRCodecom value="https://github.com/cywcd" size={200} />
                <Meta title="github项目库二维码" style={{marginTop:'10px'}} description="https://github.com/cywcd" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={8}>
            <div className="gutter-box">
              <Card title="二维码case2" bordered={false} bodyStyle={{textAlign:'center'}} >
                <QRCodecom value="http://www.webzsky.com/source/nav/" size={200} fgColor="#549500" />
                <Meta title="前端导航" style={{marginTop:'10px'}} description="http://www.webzsky.com/source/nav/" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={8}>
            <div className="gutter-box">
              <Card title="二维码case3" bordered={false} bodyStyle={{textAlign:'center'}} >
                <QRCodecom value="http://www.webzsky.com/source/photos/" size={200}
                fgColor="#0078B9" />
                <Meta title="蓝戒光影摄影作品欣赏" style={{marginTop:'10px'}} description="http://www.webzsky.com/source/photos/" />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default QRCode