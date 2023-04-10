import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss'
import App from './App/App';


const root = createRoot(document.querySelector('#root'))
root.render(<App/>)