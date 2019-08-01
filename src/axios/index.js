import { get, post } from './tools';
import * as config from './config';

export const getBbcNews = () => get({ url: config.NEWS_BBC });

export const gitOauthLogin = () => get({ url: `${config.GIT_OAUTH}/authorize?client_id=b4f8c86d5f92d9e950d3&redirect_uri=http://localhost:3008/&scope=user&state=iseworkAdmin` });
export const gitOauthToken = code => post({ 
    url: `https://cors-anywhere.herokuapp.com/${config.GIT_OAUTH}/access_token`,
    data: {
        client_id: 'b4f8c86d5f92d9e950d3',
        client_secret: '0daa22720d7a35dc1f09e8fb34dbd9a42eefe6df',
        redirect_uri: 'http://localhost:3008/',
        state: 'iseworkAdmin',
        code,
    } 
});
// {headers: {Accept: 'application/json'}}
export const gitOauthInfo = access_token => get({ url: `${config.GIT_USER}access_token=${access_token}` });

// easy-mock数据交互
// 管理员权限获取
export const admin = () => get({ url: config.MOCK_AUTH_ADMIN });
// 访问权限获取
export const guest = () => get({ url: config.MOCK_AUTH_VISITOR });