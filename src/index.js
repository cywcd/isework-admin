import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home';
import {AppContainer} from 'react-hot-loader';
import { AlitaProvider, setConfig } from 'redux-alita';
import * as serviceWorker from './serviceWorker';
import * as apis from './axios';
import './style/lib/animate.css';
import './style/antd/index.less';
import './style/index.less';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/es/locale-provider/zh_CN';

setConfig(apis);

ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <AppContainer>
        <AlitaProvider>
          <Home />
        </AlitaProvider>
    </AppContainer>
  </LocaleProvider>
,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();