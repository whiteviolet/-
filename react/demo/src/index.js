import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
// import App from './components/tab/index'; //tab选项卡
// import App from './components/router/index';//路由
// import App from './components/tabRouter/show';//路由选项卡
// import App from './components/routerDemo/index';//路由原理
import App from './components/routeParam/index';//路由传参
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
