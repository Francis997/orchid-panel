import React from 'react';
import * as ReactDOM from 'react-dom/client';
import {Greeting} from './components/Greeting'
import './static/scss/index.scss'

import { ThemeProvider } from "@material-tailwind/react";


const root = ReactDOM.createRoot(document.getElementById('root') as Element | DocumentFragment);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <Greeting/>
        </ThemeProvider>
    </React.StrictMode>
)