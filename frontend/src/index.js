import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
import ScrollToTop from './components/scroll-to-top/scroll.component.jsx';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ScrollToTop />
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  rootElement
);

serviceWorkerRegistration.register();
