import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Categories from './screens/Categories';
import Category from './screens/Category';

export default ()=> (
    <Switch>
      <Route exact path="/" component={Categories}/>
      <Route path="/category/:id" component={Category}/>
    </Switch>
);
