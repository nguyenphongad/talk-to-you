import { Component,React } from 'react';
import '../style.scss';

import { Route, Routes } from "react-router-dom"
import {withErrorBoundary} from "react-error-boundary"
import ErrorComponent from "./errorBoundary";

import Home from './pages/home';
import Music from './pages/music';
import Watching from './pages/watching';
import Messenger from './pages/messenger';
import Notification from './pages/notification';
import NotFound from './pages/notFound';
import Friend from './pages/friend';
import Marketplace from './pages/marketplace';

import Setting from './pages/pages_more/setting';
import Saved from './pages/pages_more/saved';
import Game from './pages/pages_more/game';
import Support from './pages/pages_more/support';
import Health from './pages/pages_more/health';
import Dating from './pages/pages_more/dating';
import Fanpage from './pages/pages_more/fanpage';
import Learn from './pages/learn';

class Routes_header extends Component {
  render(){
    return (
      <div className="App">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/watching" element={<Watching />} />
          <Route path="/learn" element={<Learn/>} />

          <Route path="/messenger" element={<Messenger />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/marketplace" element={<Marketplace />} />

          <Route path="/setting" element={<Setting />} />
          <Route path="/fanpage" element={<Fanpage />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/game" element={<Game />} />
          <Route path="/health" element={<Health />} />
          <Route path="/dating" element={<Dating />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
  
}

export default withErrorBoundary(Routes_header , {
  FallbackComponent: ErrorComponent,
});
