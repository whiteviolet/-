import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
// import App from './components/hoc/index'; //高级组件拦截
// import App from './components/redux/box';// redux
import App from './components/redux-connext/box';// 高阶组件封装redux
import Provider from './components/redux-connext/context/provider';// 超高阶组件封装redux
import store from "./components/redux-connext/store/store"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store} ><App /></Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
