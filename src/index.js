import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss'
import App from './App/App';
import format from 'date-fns/format';
import add from 'date-fns/add'


const root = createRoot(document.querySelector('#root'))
root.render(<App/>)

let data = new Date('2023-04-03T07:10:08.006Z')
console.log(format(data, 'HH:mm'))
let secondData = add(data, {
    minutes: 798
})
console.log(format(secondData, 'HH:mm'))

