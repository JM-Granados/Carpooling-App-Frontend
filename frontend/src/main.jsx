import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import App from './App';
import './index.css';

setupIonicReact();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IonApp>
      <IonReactRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Redirect to="/" />
        </Switch>
      </IonReactRouter>
    </IonApp>
  </StrictMode>
);