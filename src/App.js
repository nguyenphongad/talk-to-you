import { Component, React } from 'react';

import './style.scss';
import './components/pages/style_pages.scss';
import "./components/pages/home_feed/content_feed/style_status_feed.scss";
import "./components/pages/home_feed/layout_sidebar/style_home.scss";


import Header from './components/header.js';

import "./font-awesome-6/css/all.css";

import $ from 'jquery';

import { withErrorBoundary } from "react-error-boundary"
import ErrorComponent from "./components/errorBoundary";

import Routes_menu from './components/routes_header';

import ScrollToTop from "./components/pages/scrollToTop";
import '@coreui/coreui/dist/css/coreui.min.css';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes_menu></Routes_menu>
      <ScrollToTop></ScrollToTop>
    </div>
  );


}

export default withErrorBoundary(App, {
  FallbackComponent: ErrorComponent,
});
