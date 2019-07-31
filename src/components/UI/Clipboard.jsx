import React from 'react'
import { Card, Row, Col, Input, Button } from 'antd'
import BreadcrumbComon from '../BreadcrumbComon'
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Clipboard extends React.Component{
  state = {
    value: 'http://www.webzsky.com',
    copied: false,
  };
  render(){
    return(
      <div className="gutter-example">
        <BreadcrumbComon first="组件" second="复制到剪贴板" />
        <Row gutter={16}>
            <Col className="gutter-row" md={24}>
              <div className="gutter-box">
                <Card className="card-splite-pane" bordered={false}>
                <Col md={24}>
                <Input defaultValue={this.state.value} onChange={({target: {value}}) => this.setState({value, copied: false})} placeholder="输入复制内容" /> 
            {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
                  </Col>
                  <Col md={24} style={{margin:'15px 0'}}>
                    <CopyToClipboard text={this.state.value}
                      onCopy={() => this.setState({copied: true})}>
                      <span>光标选择这里复制</span>
                    </CopyToClipboard>
                  </Col>
                  <Col md={24}>
                    <CopyToClipboard text={this.state.value}
                      onCopy={() => this.setState({copied: true})}>
                      <Button type="primary" icon="copy">点我复制</Button>
                    </CopyToClipboard>
                  </Col>
                </Card>               
              </div>
            </Col>
        </Row>
      </div>
    )
  }
}

export default Clipboard