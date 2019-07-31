import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbComon from '../BreadcrumbComon';
import SingleVerticalList from './react-beautiful-dnd/SingleVerticalList';
// import MultiDrag from './react-beautiful-dnd/MultiDrag';

class Drag extends Component { 
  render(){
    return(
      <div className="gutter-example">
        <BreadcrumbComon first="组件" second="拖拽" />
        <Row gutter={16}>
          <Col className="gutter-row" md={24}>
            <div className="gutter-box">
              <Card  bordered={false} bodyStyle={{textAlign:'center', height:'800px'}} >
                <SingleVerticalList />
                {/* <MultiDrag /> */}
              </Card>
            </div>
          </Col>          
        </Row>
      </div>
    );
  }
}

export default Drag