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
import Scraper from '../pages/Scraper/Scraper';

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

import Demo from '../components/Demo';

const Router = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/'>
          <MainHeader/>
          <Switch>
            <Route path='/home' component={Home} />
            
            <Route exact path='/projects' component={Project} />
            <Route path='/projects/new' component={NewProject} />
            <Route path='/project/:id' component={Scraper} />
            


            <Route exact path='/scrapers' component={Scraper} />
            <Route path='/scrapers/new' component={ProjectDetailEmpty} />
            
            <Route path='/scraper/add' component={NewScraper} />
            <Route path='/scraper/:id/detail-empty' component={SingleBotsDetailEmpty} />
            <Route path='/scraper/:id/datasets' component={SingleBotDatasets} />

            <Route path='/category/' component={CategoryList} /> 
            <Route path='/category/add' component={CategoriesListEmpty} />
            <Route path='/category/:id/detail-empty' component={CategoriesDetailEmpty} /> 
            <Route path='/category/new' component={NewCategory} />
            <Route path='/category/:id/bots-list' component={CategoryBotsList} />


            <Route path='/designer/designer-simple-filters' component={DesignerSimpleFilters} />  
            <Route path='/designer/designer-simple-item-path' component={DesignerSimpleItemPath } />  
            <Route path='/designer/designer-simple-item-path-result' component={DesignerSimpleItemPathResult } />  
            <Route path='/designer/designer-simple-test-preview' component={DesignerSimpleTestPreview } />
          </Switch>
        </Route>
      </Switch>

    </section>
  )
}

export default Router;
