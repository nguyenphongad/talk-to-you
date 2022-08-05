import { Component,React } from 'react';
import './style.scss';
import './component/pages/style_pages.scss';
import Header from './component/header.js';
import Menu from "./component/menu.js";
import Complementary from "./component/complementary.js";
import "./font-awesome-6/css/all.css";

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header></Header>
        <Menu></Menu>
        <Complementary></Complementary>
      </div>
    );
  }
  
}


export default App;
