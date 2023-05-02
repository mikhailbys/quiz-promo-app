import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";

import {AppRoutes} from "./Router/routes/Routes.view";
import {AppContextProvider} from "./contexts/App.context";

function App() {
  return (
      <AppContextProvider>
          <BrowserRouter>
              <AppRoutes/>
          </BrowserRouter>
      </AppContextProvider>
  );
}

export default App;
