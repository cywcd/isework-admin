
import React from 'react';
import { Link } from 'react-router-dom';
import img_404_bg from '../../style/imgs/404_bg.jpg';
import bl from '../../style/imgs/bl.png';
import un_pic from '../../style/imgs/un_pic.png';
import beam from '../../style/imgs/beam.png';

class NotFound extends React.Component {
    state = {
        animated: ''
    };
    enter = () => {
        this.setState({animated: 'hinge'})
    };
    render() {
        return (
          <div className="wrap404">
            <div className="wrap-content">
              <p className="font">抱歉，页面未找到，您是否想访问以下内容。</p>
              <div>
                <Link to={"/app/Dashboard"} >首页</Link>
                <Link to={"/app/components/QRCode"} >二维码</Link>
                <Link to={"/app/charts/echarts"} >图表</Link>
              </div>

              <div className="miscbox">
                <div className="tower"></div>
                <div className="towerlight"></div>
                <div className="beam"></div>
              </div>
            </div>
            
            <div className="wave1">
              <div className="wave"></div>
            </div>
            <style>{`
            .wrap404 {
                height: 100%;
              }
              .miscbox {
                position: absolute;
                bottom: 580px;
              }
              .wrap404 {
                background: #1158e7 url(${img_404_bg}) no-repeat center bottom;
                color: #fff;
                text-align: center;
                letter-spacing: 2px;
              }
              .wrap404 a {
                display: inline-block;
                position: relative;
                z-index: 4;
                width: 295px;
                font-size: 25px;
                margin: 20px 10px;
                padding: 38px 0;
                line-height: 2;
                color: #fff;
                font-family: "microsoft yahei", "simhei", sans-serif;
                font-size: 16px;
                text-align: center;
                text-decoration: none;
                background-color: #0f4dc5;
              }
              .wrap404 a:hover {
                background-color: #3f92f0;
              }
              .wave1 {
                position: absolute;
                z-index: 3;
                bottom: 0;
                margin-top: 50px;
                width: 100%;
                color: #999;
                background: url(${bl}) repeat-x 0 0;
                -webkit-animation: 8s linear 0s none infinite tweenxx;
                -moz-animation: 8s linear 0s none infinite tweenxx;
                animation: 8s linear 0s none infinite tweenxx;
              }
              .wave {
                height: 220px;
                background: url(${bl}) repeat-x 330px 0;
                -webkit-animation: 10s linear 0s none infinite tweenx;
                -moz-animation: 10s linear 0s none infinite tweenx;
                animation: 10s linear 0s none infinite tweenx;
              }
              @-webkit-keyframes tweenx {
                0% {
                  background-position: 0 0;
                }
                100% {
                  background-position: 1600px 0;
                }
              }
              @-moz-keyframes tweenx {
                0% {
                  background-position: 0 0;
                }
                100% {
                  background-position: 1600px 0;
                }
              }
              @keyframes tweenx {
                0% {
                  background-position: 0 0;
                }
                100% {
                  background-position: 1600px 0;
                }
              }
              @-webkit-keyframes tweenxx {
                0% {
                  background-position: 0 0;
                }
                100% {
                  background-position: -1600px 0;
                }
              }
              @-moz-keyframes tweenxx {
                0% {
                  background-position: 0 0;
                }
                100% {
                  background-position: -1600px 0;
                }
              }
              @keyframes tweenxx {
                0% {
                  background-position: 0 0;
                }
                100% {
                  background-position: -1600px 0;
                }
              }
              .tower {
                background: url(${un_pic}) no-repeat;
              }
              .tower {
                background-position: 0 -127px;
                position: absolute;
                z-index: 2;
                top: 140px;
                left: 20px;
                width: 116px;
                height: 264px;
              }
              .towerlight {
                position: absolute;
                z-index: 1;
                left: 52px;
                top: 166px;
                width: 52px;
                height: 52px;
                background-color: #fefa90;
                box-shadow: 0 0 50px rgba(255, 248, 74, 1);
                -webkit-animation: 3s linear 0s none infinite light;
                -moz-animation: 3s linear 0s none infinite light;
                animation: 3s linear 0s none infinite light;
              }
              @-webkit-keyframes light {
                0% {
                  box-shadow: 0 0 50px rgba(255, 254, 165, 1);
                }
                50% {
                  box-shadow: 0 0 10px rgba(255, 248, 74, 1);
                }
                100% {
                  box-shadow: 0 0 50px rgba(255, 254, 165, 1);
                }
              }
              @-moz-keyframes light {
                0% {
                  box-shadow: 0 0 50px rgba(255, 254, 165, 1);
                }
                50% {
                  box-shadow: 0 0 10px rgba(255, 248, 74, 1);
                }
                100% {
                  box-shadow: 0 0 50px rgba(255, 254, 165, 1);
                }
              }
              @keyframes light {
                0% {
                  box-shadow: 0 0 50px rgba(255, 254, 165, 1);
                }
                50% {
                  box-shadow: 0 0 10px rgba(255, 248, 74, 1);
                }
                100% {
                  box-shadow: 0 0 50px rgba(255, 254, 165, 1);
                }
              }
              .beam {
                position: absolute;
                z-index: 3;
                left: -232px;
                top: 75px;
                width: 673px;
                height: 198px;
                background: url(${beam}) no-repeat;
                -webkit-transform: rotate(15deg);
                transform: rotate(15deg);
                -webkit-transform-origin: 308px 115px;
                transform-origin: 308px 115px;
                -webkit-animation: 10s linear 0s none infinite beam;
                -moz-animation: 10s linear 0s none infinite beam;
                animation: 10s linear 0s none infinite beam;
              }
              @-webkit-keyframes beam {
                0% {
                  -webkit-transform: rotate(15deg);
                }
                50% {
                  -webkit-transform: rotate(65deg);
                }
                100% {
                  -webkit-transform: rotate(15deg);
                }
              }
              @keyframes beam {
                0% {
                  transform: rotate(15deg);
                }
              
                50% {
                  transform: rotate(65deg);
                }
              
                100% {
                  transform: rotate(15deg);
                }
              }
              .font{
                padding:100px 0 50px 0;
                font-size:30px;
                font-family:microsoft yahei;
              }
              .wrap-content{
                margin:0 auto; 
                width:960px; 
                position:relative; 
                height:100%;
              }
            `}</style>         
          </div>        
        )
    }
}

export default NotFound;