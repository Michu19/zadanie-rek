import React from 'react';
import {
  BrowserRouter, Route
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import GalleryPage from './pages/GaleryPage';
import GlobalStyle from './GlobalStyle';

const App = () => {
  return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route path="/" exact component={LandingPage} />
          <Route path="/galery" exact component={GalleryPage} />
          <GlobalStyle/>
        </BrowserRouter>
  );
}

export default App;
