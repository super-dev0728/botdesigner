// import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './component/service-register-login';
import SelfServiceHome from './component/SelfServiceHome';
import NewProject from './component/new-project';
import ProjectList from './component/project-list';
import ProjectDetailEmpty from './component/project-detail-empty';
import ProjectBotsList from './component/project-bots-list';
import SingalBotsDetailEmpty from './component/singal-bots-detail-empty';
import SingleBotDatasets from './component/single-bot-datasets';
import CategoriesListEmpty from './component/categories-list-empty';
import CatList from './component/categories-list';
import categoryBotsList from './component/category-bots-list';
import CategoriesDetailEmpty from './component/categories-detail-empty';
import NewCat from './component/new-categories';
import NewScarper from './component/new-scarper';
import DesignerSimpleFilters from './component/designer-simple-filters';
import DesignerSimpleItemPath from './component/designer-simple-item-path';
import DesignerSimpleItemPathResult from './component/designer-simple-item-path-result';
import DesignerSimpleTestPreview from './component/designer-simple-test-preview';


// class App extends Component {

//   state = {
//     data: null
//   };


//   render() {
//     return (
//     <Router>          
//       <Switch>
//         <Route exact path='/' component={Login} />
//         <Route path='/SelfServiceHome' component={SelfServiceHome} />
//         <Route path='/new-project' component={NewProject} />
//         <Route path='/project-list' component={ProjectList} />
//         <Route path='/project-detail-empty' component={ProjectDetailEmpty} />
//         <Route path='/project-bots-list' component={ProjectBotsList} />
//         <Route path='/singal-bots-detail-empty' component={SingalBotsDetailEmpty} />
//         <Route path='/single-bot-datasets' component={SingleBotDatasets} />
//         <Route path='/categories-list' component={CatList} /> 
//         <Route path='/categories-list-empty' component={CategoriesListEmpty} />
//         <Route path='/categories-detail-empty' component={CategoriesDetailEmpty} /> 
//         <Route path='/new-categories' component={NewCat} />
//         <Route path='/category-bots-list' component={categoryBotsList} />   
//         <Route path='/new-scarper' component={NewScarper} />
//         <Route path='/designer-simple-filters' component={DesignerSimpleFilters} />  
//         <Route path='/designer-simple-item-path' component={DesignerSimpleItemPath } />  
//         <Route path='/designer-simple-item-path-result' component={DesignerSimpleItemPathResult } />  
//         <Route path='/designer-simple-test-preview' component={DesignerSimpleTestPreview } />  
        
        
//       </Switch>
//     </Router>
//     );
//   }
// }

// export default App;


const Routes = () => {
  return (
    <Router>          
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/SelfServiceHome' component={SelfServiceHome} />
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
    </Router>
  )
}

export default Routes
