import React from 'react';
import Router from './routes';
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import '../custom.css'

function App() {
  return (
    <div>
      <Router />
      <ReactNotification />
    </div>
  );
}

export default App;
