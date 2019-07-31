import React from 'react'
import { Row, Col, Card, Divider } from 'antd';
import BreadcrumbComon from '../BreadcrumbComon';
import { SketchPicker, AlphaPicker, BlockPicker, ChromePicker, CirclePicker, CompactPicker, GithubPicker, HuePicker, MaterialPicker, PhotoshopPicker, SliderPicker,SwatchesPicker,TwitterPicker } from 'react-color'

class ReactColor extends React.Component{
  state = {
    background: '#fff',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render(){
    return <div className="gutter-example">
    <BreadcrumbComon first="组件" second="取色器" />
    <Row gutter={16}>
      <Col className="gutter-row" md={6}>
        <div className="gutter-box">
          <Card title="SketchPicker"  bordered={false} style={{background:this.state.background,height:'400px'}}>
            <SketchPicker color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete } />   </Card>          
        </div>
      </Col>
      <Col className="gutter-row" md={12}>
        <div className="gutter-box">
          <Card title="PhotoshopPicker"  bordered={false} style={{background:this.state.background,height:'400px'}}>
            <PhotoshopPicker color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete } />   </Card>          
        </div>
      </Col>
      <Col className="gutter-row" md={6}>
        <div className="gutter-box">
          <Card title="ChromePicker" className="card-colorbox"  bordered={false} style={{background:this.state.background,height:'400px'}}>
            <ChromePicker color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete } />   </Card>          
        </div>
      </Col>
      <Col className="gutter-row" md={6}>
        <div className="gutter-box">
          <Card title="GithubPicker，TwitterPicker"  bordered={false} style={{background:this.state.background,height:'410px'}}>
            <GithubPicker color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete } />
            <Divider>GithubPicker</Divider>
            <TwitterPicker color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete } />
            <Divider>TwitterPicker</Divider>    
          </Card>          
        </div>
      </Col>
      <Col className="gutter-row" md={10}>
        <div className="gutter-box">
          <Card title="HuePicker，AlphaPicker，SliderPicker" bordered={false} style={{background:this.state.background,height:'410px'}}>
            <HuePicker color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete } />
            <Divider>HuePicker</Divider>
            <AlphaPicker color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete } />
            <Divider>AlphaPicker</Divider>
            <SliderPicker color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete } />
            <Divider>SliderPicker</Divider>
          </Card>     
        </div>
      </Col>
      <Col className="gutter-row" md={8}>
        <div className="gutter-box">
          <Card title="CirclePicker，CompactPicker"  bordered={false} style={{background:this.state.background,height:'410px'}}>
            <CirclePicker color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete } />
            <Divider>CirclePicker</Divider>
            <CompactPicker color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete } />
            <Divider>CompactPicker</Divider>
          </Card>       
        </div>
      </Col>  
      <Col className="gutter-row" md={12}>
        <div className="gutter-box">
          <Card title="SwatchesPicker" bordered={false} style={{background:this.state.background,height:'350px'}}>
            <SwatchesPicker color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete } />
          </Card>          
        </div>
      </Col> 
      <Col className="gutter-row" md={12}>
        <div className="gutter-box">
          <Card title="BlockPicker，MaterialPicker" bordered={false} style={{height:'350px'}}>
            <Col className="gutter-row" md={12}>
              <BlockPicker color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete } />
              <Divider>BlockPicker</Divider>
            </Col> 
            <Col className="gutter-row" md={12}>
              <MaterialPicker color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete } />
              <Divider>MaterialPicker</Divider>
            </Col>
          </Card>          
        </div>
      </Col>     
    </Row>
  </div>
  }
}

export default ReactColor