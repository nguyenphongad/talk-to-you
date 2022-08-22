import { Component, React, useState } from 'react';
import '../style.scss';

import { Route, Routes } from "react-router-dom"
import { withErrorBoundary } from "react-error-boundary"
import ErrorComponent from "./errorBoundary";

import Home from './pages/home_feed/home';
import Music from './pages/music';
import Watching from './pages/watching/watching';
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
import Learning from './pages/learning';


function Routes_header() {

  return (
    <>
      <Routes>
        <Route index path="/feed" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/watching" element={<Watching />} />
        <Route path="/learning" element={<Learning />} />

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

    </>
  );

}

export default withErrorBoundary(Routes_header, {
  FallbackComponent: ErrorComponent,
});
