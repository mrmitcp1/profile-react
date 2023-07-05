import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="container">
        <div className="card">
            <div className="card--header" />
            <img
                className="avatar"
                src="./IMG_1074.JPG"
                alt="avatar"
            />
            <div className="card--body">
                <div>
                    <p className="text-header">Toàn Đông Á Bệnh Phu</p>
                    <p className="text-sub">
                        Yêu Lisa Black Pink
                    </p>
                    <button className="btn third">FOLLOW</button>
                </div>
            </div>
        </div>
    </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
