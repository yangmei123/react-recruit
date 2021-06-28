import logo from '@/logo.svg';
import React, { Suspense } from 'react';
import '@/App.css';
import '@/styles/base.css';
import '@/styles/style.scss';

import { recruit, recruitDetail  } from '@/constants/PagePath';

import { Route,  HashRouter, Switch } from 'react-router-dom'


import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
const Recruit = recruit().component;

function App() {
  return (
    <div className="App">
      <Header></Header>
        <HashRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path='/' component={ Recruit } exact />
              <Route path={recruit().path} component={ Recruit } />
              <Route path={recruitDetail().path} component={recruitDetail().component} />
            </Switch>
          </Suspense>
        </HashRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
