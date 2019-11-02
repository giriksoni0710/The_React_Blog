import React from 'react';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticleListPage from './pages/ArticleListPage';
import NavBar from './navbar/NavBar';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import './App.css';

function App() {
  return (

    <Router>
    <div className="App">

  <NavBar></NavBar>
  <div id="page-body">
    <Route path="/" component={HomePage} exact></Route>
    
    <Route path="/about" component={AboutPage} ></Route>
    
    <Route path="/article-list" component={ArticleListPage} ></Route>
    
    <Route path="/article/:name" component={ArticlePage} ></Route>
    </div>
    </div>
    </Router>
  );
}

export default App;
