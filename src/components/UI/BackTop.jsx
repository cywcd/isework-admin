import React from 'react';
import { BackTop,Empty } from 'antd';


class BackTopCom extends React.Component{
  state = {
    target: this.targetFn,
    visibilityHeight: 100,
    onClick: this.handleOnClick,
  };
  handleOnClick = (e) => {
    // this.setState({ visibilityHeight: e.target.value });
  };
  targetFn = () => {

  };
  render(){
    return(
      <div style={{height:'2200px'}}>
        <BackTop onClick={this.handleOnClick} />
        <BackTop>
          <div className="ant-back-top-inner">UP</div>
        </BackTop>
        <style>{`
            #components-back-top-demo-custom .ant-back-top {
              bottom: 100px;
            }
            #components-back-top-demo-custom .ant-back-top-inner {
              height: 40px;
              width: 40px;
              line-height: 40px;
              border-radius: 4px;
              background-color: #1088e9;
              color: #fff;
              text-align: center;
              font-size: 20px;
            }
        `}</style> 
      </div>
    )
  }
}

export default BackTopCom