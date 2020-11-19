import React from 'react';
import { Switch } from 'react-router-dom';

import { Route } from './Route';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

import { Dashboard } from '../pages/Dashboard';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/dashboard" exact component={Dashboard} isPrivate />
  </Switch>
);
