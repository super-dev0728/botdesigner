import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SelfServiceHome from '../SelfServiceHome';
import NewProject from '../Project/NewProject';
import ProjectList from '../Project/ProjectList';
import ProjectDetailEmpty from '../Project/ProjectDetailEmpty';
import ProjectBotsList from '../Project/ProjectBotsList';
import SingalBotsDetailEmpty from '../Scraper/SingalBotsDetailEmpty';
import SingleBotDatasets from '../Scraper/SingleBotDatasets';
import CategoriesListEmpty from '../Category/CategoriesListEmpty';
import CatList from '../Category/CategoriesList';
import categoryBotsList from '../Category/CategoryBotsList';
import CategoriesDetailEmpty from '../Category/CategoriesDetailEmpty';
import NewCat from '../Category/NewCategories';
import NewScarper from '../Scraper/NewScraper';
import DesignerSimpleFilters from '../Designer/DesignerSimpleFilters';
import DesignerSimpleItemPath from '../Designer/DesignerSimpleItemPath';
import DesignerSimpleItemPathResult from '../Designer/DesignerSimpleItemPathResult';
import DesignerSimpleTestPreview from '../Designer/DesignerSimpleTestPreview';

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route path='/self-service-home' component={SelfServiceHome} />
        <Route path='/new-project' component={NewProject} />
        <Route path='/project-list' component={ProjectList} />
        <Route path='/project-detail-empty' component={ProjectDetailEmpty} />
        <Route path='/project-bots-list' component={ProjectBotsList} />
        <Route path='/singal-bots-detail-empty' component={SingalBotsDetailEmpty} />
        <Route path='/single-bot-datasets' component={SingleBotDatasets} />
        <Route path='/categories-list' component={CatList} /> 
        <Route path='/categories-list-empty' component={CategoriesListEmpty} />
        <Route path='/categories-detail-empty' component={CategoriesDetailEmpty} /> 
        <Route path='/new-categories' component={NewCat} />
        <Route path='/category-bots-list' component={categoryBotsList} />   
        <Route path='/new-scarper' component={NewScarper} />
        <Route path='/designer-simple-filters' component={DesignerSimpleFilters} />  
        <Route path='/designer-simple-item-path' component={DesignerSimpleItemPath } />  
        <Route path='/designer-simple-item-path-result' component={DesignerSimpleItemPathResult } />  
        <Route path='/designer-simple-test-preview' component={DesignerSimpleTestPreview } />

      </Switch>

    </section>
  )
}

export default Routes;
