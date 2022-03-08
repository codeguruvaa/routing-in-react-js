import React from 'react';
import { Switch } from 'react-router-dom';

import { Route, BrowserRouter } from 'react-router-dom';

import About from './Pages/About';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Header from './Components/Header';
import Notfound from './Pages/NotFound';

import './App.css';

function App() {
  return (
    <div>
      <div className='container'>

      <BrowserRouter>
       <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} /> 
          <Route path="/blog" component={Blog} />
          <Route component={Notfound} />
        </Switch>
      </BrowserRouter>

      </div>

    </div>
  );
}

export default App;