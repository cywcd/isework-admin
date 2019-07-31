import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbComon from '../BreadcrumbComon';
import { Map } from 'react-amap';

class Amap extends Component {
  render(){
    return(
      <div className="gutter-example">
        <BreadcrumbComon first="组件" second="地图" />
        <Row gutter={16}>
          <Col className="gutter-row" md={24}>
            <div className="gutter-box">
              <Card  bordered={false} bodyStyle={{textAlign:'center', height:'500px'}} >
                <Map amapkey={'803b6d1add03d1540dbe8fa0af945c4b'} version={'1.4.0'} />
              </Card>
            </div>
          </Col>          
        </Row>
      </div>
    );
  }
}

export default Amap