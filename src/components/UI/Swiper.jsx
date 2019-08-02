import React from 'react'
import BreadcrumbComon from '../BreadcrumbComon'
import { Row, Col, Card } from 'antd';
import Swiper from 'swiper'; // v4.x
import '../../style/lib/swiper.min.css';
import pic01 from '../../style/imgs/pic01.jpg';
import pic02 from '../../style/imgs/pic02.jpg';
import pic03 from '../../style/imgs/pic03.jpg';
import pic04 from '../../style/imgs/pic04.jpg';
import pic05 from '../../style/imgs/pic05.jpg';
import wm_button_icon from '../../style/imgs/wm_button_icon.png';

class swiperCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentWillMount(){
    console.log('componentWillMount')
  }
  componentDidMount(){
    var swiperDemo1;
    swiperDemo1 = new Swiper('.swiper-demo1',{
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      loopedSlides: 5,
      autoplay:true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable :true,
      },
      on: {
        progress: function(progress) {
          for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i);
            var slideProgress = this.slides[i].progress;
            var modify = 1;
            if (Math.abs(slideProgress) > 1) {
              modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
            }
            var translate = slideProgress * modify * 260 + 'px';
            var scale = 1 - Math.abs(slideProgress) / 5;
            var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            slide.transform('translateX(' + translate + ') scale(' + scale + ')');
            slide.css('zIndex', zIndex);
            slide.css('opacity', 1);
            if (Math.abs(slideProgress) > 3) {
              slide.css('opacity', 0);
            }
          }
        },
        setTransition: function(transition) {
          for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i)
            slide.transition(transition);
          }

        }
      }
    });
  }

  render(){
    return(
      <div className="gutter-example">
        <BreadcrumbComon first="组件" second="轮播图" />
        <Row gutter={16}>
            <Col className="gutter-row" md={24}>
              <div className="gutter-box">
                <Card className="card-swiper" bordered={false}>
                  <Col md={24} style={{height:'300px'}}>
                  <div className="swiper-container swiper-demo1">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide"><img src={pic01} /><p>南锣鼓巷·帽儿胡同-印巷小馆</p></div>
                      <div className="swiper-slide"><img src={pic02} /><p>后海夜晚·灯红酒绿下的霓虹灯</p></div>
                      <div className="swiper-slide"><img src={pic03} /><p>四季青-南坞桥-车流霓虹灯</p></div>
                      <div className="swiper-slide"><img src={pic04} /><p>后海酒吧一条街夜幕下</p></div>
                      <div className="swiper-slide"><img src={pic05} /><p>华贸桥车流光轨</p></div>
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>                  
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                    
                  </Col>                  
                </Card>               
              </div>
            </Col>
        </Row>
        <style>
          {`
            .card-swiper{
              padding: 30px;
              height: 550px;
              position:relative;
            }
            .card-swiper .swiper-container {
              width: 100%;
              height: 500px;
              position:relative;
            }
            .card-swiper  .swiper-slide {
              width: 520px;
              height: 300px;
              background: #fff;
              box-shadow: 0 8px 30px #ddd;
            }
            .card-swiper  .swiper-slide img{
              display:block;
            }
            .card-swiper  .swiper-slide p {
              line-height: 50px;
              padding-top: 0;
              text-align: center;
              color: #636363;
              font-size: 1.1em;
              margin: 0;
            }
            
            .card-swiper .swiper-pagination {
              width: 100%;
              bottom: 20px;
            }
            
            .card-swiper .swiper-pagination-bullets .swiper-pagination-bullet {
              margin: 0 5px;
              border: 3px solid #fff;
              background-color: #d5d5d5;
              width: 10px;
              height: 10px;
              opacity: 1;
            }
            
            .card-swiper .swiper-pagination-bullets .swiper-pagination-bullet-active {
              border: 3px solid #00aadc;
              background-color: #fff;
            }
            
            .card-swiper .swiper-button-prev {
              left: -30px;
              width: 45px;
              height: 45px;
              background: url(${wm_button_icon}) no-repeat;
              background-position: 0 0;
              background-size: 100%;
              outline:none;
            }
            
            .card-swiper .swiper-button-prev:hover {
              background-position: 0 -46px;
              background-size: 100%
            }
            
            .card-swiper .swiper-button-next {
              right: -30px;
              width: 45px;
              height: 45px;
              background: url(${wm_button_icon}) no-repeat;
              background-position: 0 -93px;
              background-size: 100%;
              outline:none;
            }
            
            .card-swiper .swiper-button-next:hover {
              background-position: 0 -139px;
              background-size: 100%
            }  
          `}
        </style>
      </div>
    )
  }
}

export default swiperCom