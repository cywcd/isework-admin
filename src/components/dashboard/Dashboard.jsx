/**
 * Created by hao.cheng on 2017/5/3.
 */
import React from 'react';
import { Row, Col, Card, Timeline, Icon } from 'antd';
import BreadcrumbComon from '../BreadcrumbComon';
import EchartsViews from './EchartsViews';
import EchartsProjects from './EchartsProjects';
import qx from '../../style/imgs/qx.jpg';
import bl from '../../style/imgs/bl.jpg';
import wln from '../../style/imgs/wln.jpg';
import xl from '../../style/imgs/xl.png';
import glyy from '../../style/imgs/glyy.png';
import qpp from '../../style/imgs/qpp.jpg';
import bb from '../../style/imgs/bb.png';


class Dashboard extends React.Component {
    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbComon />
                <Row gutter={10}>
                    <Col className="gutter-row" md={6}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                              <a href="https://github.com/cywcd" rel="noopener noreferrer" target="_blank">
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="github" className="text-2x" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted f-black">gitHub</div>
                                        <h2>30+</h2>
                                    </div>
                                </div>
                              </a>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={6}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                              <a href="http://www.webzsky.com/source/photos/" rel="noopener noreferrer" target="_blank">
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="picture" className="text-2x text-info" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted f-black">图片</div>
                                        <h2>520</h2>
                                    </div>
                                </div>
                              </a>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={6}>      
                        <div className="gutter-box">
                            <Card bordered={false}>
                              <a href="http://www.webzsky.com/source/nav/" rel="noopener noreferrer" target="_blank">
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="heart" className="text-2x text-danger" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted f-black">收藏</div>
                                        <h2>1314</h2>
                                    </div>
                                </div>
                              </a>
                            </Card>
                        </div>
                    </Col>                    
                    <Col className="gutter-row" md={6}>    
                        <div className="gutter-box">
                            <Card bordered={false}>
                              <a href="http://cywcd.github.io/" rel="noopener noreferrer" target="_blank">
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="contacts" className="text-2x text-success" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted f-black">git博客</div>
                                        <h2>666</h2>
                                    </div>
                                </div>
                              </a>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card bordered={false} className={'no-padding'}>
                                <EchartsProjects />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>消息列表</h3>
                                </div>
                                <span className="card-tool"><Icon type="sync" /></span>
                                <ul className="list-group no-border" style={{paddingLeft:'0', height:'345px',overflowY:'auto'}}>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img src={qx} className="img-responsive img-circle" alt="test" />
                                        </span>
                                        <div className="clear">
                                            <span className="block">千寻</span>
                                            <span className="text-muted">最善良，最能给予精神的人，是真正的调解人！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img src={bl} className="img-responsive img-circle" alt="test" />
                                        </span>
                                        <div className="clear">
                                            <span className="block">白龙</span>
                                            <span className="text-muted">白龙是一个善良而又细心的人，在电影中他必须和汤婆婆合作才能重获他的名字和自由!</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img src={wln} className="img-responsive img-circle" alt="test" />
                                        </span>
                                        <div className="clear">
                                            <span className="block">无脸男</span>
                                            <span className="text-muted">最渴求的仍然是千寻的纯真，一种不能通过金钱来建立的关系！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img src={xl} className="img-responsive img-circle" alt="test" />
                                        </span>
                                        <div className="clear">
                                            <span className="block">小玲</span>
                                            <span className="text-muted">意志坚强、善于分析的人，他们总是乐于助人</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img src={glyy} className="img-responsive img-circle" alt="test" />
                                        </span>
                                        <div className="clear">
                                            <span className="block">锅炉爷爷</span>
                                            <span className="text-muted">善良却深藏不露的人</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img src={qpp} className="img-responsive img-circle" alt="test" />
                                        </span>
                                        <div className="clear">
                                            <span className="block">钱婆婆</span>
                                            <span className="text-muted">直率、善良的天性使钱婆婆成为一位杰出的艺术家</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img src={bb} className="img-responsive img-circle" alt="test" />
                                        </span>
                                        <div className="clear">
                                            <span className="block">坊宝宝</span>
                                            <span className="text-muted">自私的孩子，为了得到他想要的东西，他很容易尖叫或伤害别人</span>
                                        </div>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>项目进度</h3>
                                    <small>项目状态：技术研发中...</small>
                                </div>
                                <span className="card-tool"><Icon type="sync" /></span>
                                <Timeline>
                                    <Timeline.Item color="green">发布上线</Timeline.Item>
                                    <Timeline.Item color="green">发布测试,修改bug</Timeline.Item>
                                    <Timeline.Item color="red">技术研发</Timeline.Item>
                                    <Timeline.Item color="red">
                                        <p>UI设计</p>
                                        <p>标注、切图</p>
                                    </Timeline.Item>
                                    <Timeline.Item color="#108ee9">
                                        <p>技术评审，UE修改完善</p>
                                        <p>需求评审</p>
                                        <p>需求收集，UE设计</p>
                                    </Timeline.Item>
                                </Timeline>
                            </Card>
                        </div>
                    </Col>                    
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>访问来源统计</h3>
                                </div>
                                <span className="card-tool"><Icon type="sync" /></span>
                                <EchartsViews />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard;