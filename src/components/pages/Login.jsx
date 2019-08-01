
import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { PwaInstaller } from '../widget';
import { connectAlita } from 'redux-alita';
import { Particles } from '@blackbox-vision/react-particles';
import bg from '../../style/imgs/login_bg.png';

const FormItem = Form.Item;

class Login extends React.Component {
    componentDidMount() {
        const { setAlitaState } = this.props;
        setAlitaState({ stateName: 'auth', data: null });
    }
    componentDidUpdate(prevProps) { // React 16.3+弃用componentWillReceiveProps
        const { auth: nextAuth = {}, history } = this.props;
        // const { history } = this.props;
        if (nextAuth.data && nextAuth.data.uid) { // 判断是否登陆
            localStorage.setItem('user', JSON.stringify(nextAuth.data));
            history.push('/');
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const { setAlitaState } = this.props;
                if (values.userName === 'admin' && values.password === 'admin') setAlitaState({ funcName: 'admin', stateName: 'auth' });
                if (values.userName === 'guest' && values.password === 'guest') setAlitaState({ funcName: 'guest', stateName: 'auth' });
            }
        });
    };
    gitHub = () => {
        window.location.href = 'https://github.com/login/oauth/authorize?client_id=b4f8c86d5f92d9e950d3&redirect_uri=http://localhost:3008/&scope=user&state=iseworkAdmin';
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
              <div className="login-bg">
                <Particles
                  id="simple"
                  width="100%"
                  height="100vh"
                  style={{
                    backgroundColor: 'none',
                  }}
                  params={{
                    particles: {
                      number: {
                        value: 50,
                      },
                      size: {
                        value: 3,
                      },
                    },
                    interactivity: {
                      events: {
                        onhover: {
                          enable: true,
                          mode: 'repulse',
                        },
                      },
                    },
                  }}
                />
              </div>
                <div className="login-form" >
                    <div className="login-logo">
                        <span>ISEWORK Admin</span>
                        <PwaInstaller />
                    </div>
                    <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px'}}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="管理员输入admin, 游客输入guest" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="管理员输入admin, 游客输入guest" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox style={{color:'#fff'}}>记住我</Checkbox>
                            )}
                            <span className="login-form-forgot" href="" style={{float: 'right'}}>忘记密码</span>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                                登录
                            </Button>
                            <p style={{display: 'flex', justifyContent: 'space-between',color:'#fff'}}>
                                <span >或 现在就去注册!</span>
                                <span onClick={this.gitHub} ><Icon type="github" /> (第三方登录)</span>
                            </p>
                        </FormItem>
                    </Form>
                </div>
                <style>{`
                .login-bg{
                  width: 100%;
                  height: 100%;
                  background-image: url(${bg});
                  background-size: cover;
                  background-position: 50% 50%;
                  background-repeat: no-repeat;
                  width: 100%;
                  height: 100%;
                 position: absolute;
                 top: 0;
                 left: 0;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
                `}</style>
            </div>
        );
    }
}

export default connectAlita(['auth'])(Form.create()(Login));