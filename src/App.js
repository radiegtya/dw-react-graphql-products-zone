import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Categories from './screens/Categories';
import Category from './screens/Category';
import CategoriesAdd from './screens/CategoriesAdd';

export default ()=> (
    <Switch>
      <Route exact path="/" component={Categories}/>
      <Route exact path="/categories/add" component={CategoriesAdd}/>
      <Route path="/categories/:id" component={Category}/>
    </Switch>
);
