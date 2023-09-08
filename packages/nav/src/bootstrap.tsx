import { createRoot } from 'react-dom/client';
import React from 'react';
import { App } from './app/App';
import './app/styles/reset.scss';
import './app/styles/index.scss';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
