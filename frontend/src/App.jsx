import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { StrictMode } from 'react';
import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import HomeGuest from './HomeGuest'


setupIonicReact();

function App() {

  return (
    <StrictMode>
    <IonApp>
      <IonReactRouter>
        <Switch>
          <Route exact path="/" component={HomeGuest} />
          <Redirect to="/" />
        </Switch>
      </IonReactRouter>
    </IonApp>
    </StrictMode>
  )
}

export default App
