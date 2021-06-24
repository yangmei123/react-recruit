import logo from '@/logo.svg';
import React, { Suspense } from 'react';
import '@/App.css';
import '@/styles/base.css';
import '@/styles/style.css';

import { recruit, recruitDetail  } from '@/constants/PagePath';

import { Route,  HashRouter, Switch } from 'react-router-dom'


import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HashRouter>
        <Switch>
        <Suspense fallback={<div>Loading...</div>}>
            <Route path={recruit().path} component={recruit().component} replace />
            <Route path={recruitDetail().path} component={recruitDetail().component} replace />
          </Suspense>
        </Switch>
      </HashRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
