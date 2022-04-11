import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Header from '../components/Layout/Header' 

import Landing from '../pages/Landing';
import Login from '../pages/Auth/Login'
import Signup from '../pages/Auth/Signup'

import Home from '../pages/Home';

import NewProject from '../pages/Project/NewProject';
import Project from '../pages/Project/Project';
import ProjectDetailEmpty from '../components/Project/ProjectDetailEmpty';
import ProjectBotsList from '../components/Project/ProjectBotsList';

import SingleBotsDetailEmpty from '../components/Scraper/SingalBotsDetailEmpty';
import SingleBotDatasets from '../components/Scraper/SingleBotDatasets';
import CategoriesListEmpty from '../components/Category/CategoriesListEmpty';
import CategoryList from '../components/Category/CategoriesList';
import CategoryBotsList from '../components/Category/CategoryBotsList';
import CategoriesDetailEmpty from '../components/Category/CategoriesDetailEmpty';
import NewCategory from '../components/Category/NewCategories';
import NewScraper from '../components/Scraper/NewScraper';
import DesignerSimpleFilters from '../components/Designer/DesignerSimpleFilters';
import DesignerSimpleItemPath from '../components/Designer/DesignerSimpleItemPath';
import DesignerSimpleItemPathResult from '../components/Designer/DesignerSimpleItemPathResult';
import DesignerSimpleTestPreview from '../components/Designer/DesignerSimpleTestPreview';
import MainHeader from '../components/Layout/MainHeader';

const Router = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/'>
          <MainHeader/>
          <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/projects'>
              <Route path='/' component={Project} />
              <Route path='/add' component={NewProject} />
              <Route path='/:id/detail-empty' component={ProjectDetailEmpty} />
              <Route path='/:id/bots' component={ProjectBotsList} />
            </Route>
            <Route path='/scraper'>
              <Route path='/add' component={NewScraper} />
              <Route path='/:id/detail-empty' component={SingleBotsDetailEmpty} />
              <Route path='/:id/datasets' component={SingleBotDatasets} />
            </Route>
            <Route path='/category'>
              <Route path='/' component={CategoryList} /> 
              <Route path='/add' component={CategoriesListEmpty} />
              <Route path='/:id/detail-empty' component={CategoriesDetailEmpty} /> 
              <Route path='/new' component={NewCategory} />
              <Route path='/:id/bots-list' component={CategoryBotsList} />
            </Route>
            <Route path='/designer'>
              <Route path='/designer-simple-filters' component={DesignerSimpleFilters} />  
              <Route path='/designer-simple-item-path' component={DesignerSimpleItemPath } />  
              <Route path='/designer-simple-item-path-result' component={DesignerSimpleItemPathResult } />  
              <Route path='/designer-simple-test-preview' component={DesignerSimpleTestPreview } />
            </Route>
          </Switch>
        </Route>
      </Switch>

    </section>
  )
}

export default Router;
