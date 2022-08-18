import { Component, React } from 'react';
import './style.scss';
import './component/pages/style_pages.scss';


import Header from './component/header.js';

import "./font-awesome-6/css/all.css";

import $ from 'jquery';

import { withErrorBoundary } from "react-error-boundary"
import ErrorComponent from "./component/errorBoundary";

import Routes_menu from './component/routes_header';

import ScrollToTop from "./component/pages/scrollToTop";
import { motion, AnimatePresence } from "framer-motion";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes_menu></Routes_menu>
      <ScrollToTop></ScrollToTop>
      ok
    </div>
  );


}

export default withErrorBoundary(App, {
  FallbackComponent: ErrorComponent,
});
