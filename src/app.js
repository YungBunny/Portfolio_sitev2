import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import HomePage from './components/HomePage';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<HomePage />, document.getElementById('app'));

