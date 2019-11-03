import React from 'react';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticleListPage from './pages/ArticleListPage';
import NavBar from './navbar/NavBar';
import NotFoundPage from './pages/404page';

import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import './App.css';

function App() {
  return (

    <Router>
    <div className="App">
    {/* here we load the Navbar exported */}
  
  <NavBar></NavBar>

    {/* We set routes for each page  */}
  <div id="page-body">
    <Switch>
    <Route path="/" component={HomePage} exact></Route>
    
    <Route path="/about" component={AboutPage} ></Route>
    
    <Route path="/article-list" component={ArticleListPage} ></Route>
    
    <Route path="/article/:name" component={ArticlePage} ></Route>

    {/* If we dont give a path to route, it takes this as default for all other pages */}

    <Route component={NotFoundPage}></Route>
    </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
