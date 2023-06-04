import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ban from './dc/Ban';


/* 
    [ 리액트 라우터 ]
    -> 컴포넌트를 연결하여 특정 이벤트에 모듈을 
    변경해주는 중계역할을 함 
    1. <BrowserRouter> - 라우터 Root
    2. <Routes> - 개별 라우터를 묶어주는 역할
    3. <Route> - 개별 라우터 
        (속성)
        (1) path : 경로를 지정함(Link의 to속성 경로와 일치함)
        (2) element : 연결할 컴포넌트 지정 
        (하위 라우트 만들기)
        <Route path="/">
            <Route />
            <Route />
            <Route />
        </Route>
    4. 라우터를 구성하는 컴포넌트는 자체적으로 내보내기 셋팅을 해야한다.
    -> export default 라우터 컴포넌트
*/

// function App(){

// } // App  컴포 // 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Ban cat='main'/>
        <Ban cat='CHARACTERS'/>
    </>)
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
