import React from 'react'
import { Row, Col, Card } from 'antd';
import BreadcrumbComon from '../BreadcrumbComon';
import SplitPane from 'react-split-pane'

class SplitPaneCom extends React.Component{
  render(){
    return(
      <div className="gutter-example">
        <BreadcrumbComon first="组件" second="分割面板" />
        <Row gutter={16}>
            <Col className="gutter-row" md={24}>
              <div className="gutter-box">
              <Card className="card-splite-pane" bordered={false}>
              <SplitPane split="vertical" minSize={200} style={{height:'600px'}}>
                  <div className="pane-node left-pane">左侧分割面板<br />(当前设置最小宽200px)</div>
                  <SplitPane className="right-pane" split="horizontal" style={{height:'600px'}}>
                      <div className="pane-node sub-pane" style={{background:'green'}}>右上分割面板</div>
                      <div className="pane-node sub-pane" style={{background:'blue'}}>右下分割面板</div>                      
                  </SplitPane>                  
              </SplitPane>
              </Card>
              </div>
            </Col>
        </Row>
        <style>{`
        .card-splite-pane .ant-card-body{
          position:relative; 
        }
        .card-splite-pane .pane-node{padding:20px;}
        .card-splite-pane .sub-pane{
          width:100%;
          height:100%;
          float:left;
          min-height:100px;
        }
        .card-splite-pane .left-pane{
          height:100%;
          background:#24C496
        }
        .card-splite-pane .right-pane{
          height:100%;
          background:#fff;
        }
        .Resizer {
          background: #000;
          opacity: .2;
          z-index: 1;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          -moz-background-clip: padding;
          -webkit-background-clip: padding;
          background-clip: padding-box;
      }
  
       .Resizer:hover {
          -webkit-transition: all 2s ease;
          transition: all 2s ease;
      }
  
       .Resizer.horizontal {
          height: 11px;
          margin: -5px 0;
          border-top: 5px solid rgba(255, 255, 255, 0);
          border-bottom: 5px solid rgba(255, 255, 255, 0);
          cursor: row-resize;
          width: 100%;
      }
  
      .Resizer.horizontal:hover {
          border-top: 5px solid rgba(0, 0, 0, 0.5);
          border-bottom: 5px solid rgba(0, 0, 0, 0.5);
      }
  
      .Resizer.vertical {
          width: 11px;
          margin: 0 -5px;
          border-left: 5px solid rgba(255, 255, 255, 0);
          border-right: 5px solid rgba(255, 255, 255, 0);
          cursor: col-resize;
      }
  
      .Resizer.vertical:hover {
          border-left: 5px solid rgba(0, 0, 0, 0.5);
          border-right: 5px solid rgba(0, 0, 0, 0.5);
      }
      .Resizer.disabled {
        cursor: not-allowed;
      }
      .Resizer.disabled:hover {
        border-color: transparent;
      }
        `}</style>
      </div>
    )
  }
}

export default SplitPaneCom;