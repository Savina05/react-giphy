// Components:
//   1. App
//     2. Searchbar
//     3. Gif List
//       3.1 Gif
//       3.2 Gif
//       3.3 Gif
//     4. Gif

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'

import '../assets/stylesheets/application.scss';

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <App />,
    root
  );
}
