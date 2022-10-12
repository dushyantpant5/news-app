import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  
  
  render() {
    let pageSizeVar = 8;
    return (
      <>
        <div>
      <BrowserRouter>
          {/* Nav-bar is here */}
          <Navbar/>

        <Routes>

          <Route
            exact path='/'
            element = {<News key = "general" pageSize = {pageSizeVar} country = "in" category = "general"/>}
          />
          <Route
            exact path='/technology'
            element = {<News key = "technology"pageSize = {pageSizeVar} country = "in" category = "technology"/>}
          />
          <Route
            exact path='/entertainment'
            element = {<News key = "entertainment"pageSize = {pageSizeVar} country = "in" category = "entertainment"/>}
          />
          <Route
            exact path='/business'
            element = {<News key = "business"pageSize = {pageSizeVar} country = "in" category = "business"/>}
          />
          <Route
            exact path='/sports'
            element = {<News key = "sports"pageSize = {pageSizeVar} country = "in" category = "sports"/>}
          />
          <Route
            exact path='/science'
            element = {<News key = "science"pageSize = {pageSizeVar} country = "in" category = "science"/>}
          />
          <Route
            exact path='/health'
            element = {<News key = "health"pageSize = {pageSizeVar} country = "in" category = "health"/>}
          />


        </Routes>
      </BrowserRouter>    
          </div>
      </>
    )
  }
}

