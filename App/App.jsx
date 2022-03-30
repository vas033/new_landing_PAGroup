import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import './app.css';
import './src/fonts/IBMPlexMono/stylesheet.css';
import { Layout } from './Layout';

const App = () => {
  return (
    <React.Fragment>
      <Layout />
    </React.Fragment>
  );
};

const container = document.getElementById('react-app');
const root = ReactDOMClient.createRoot(container);

window.addEventListener('load', () => {
  root.render(<App />)
})
