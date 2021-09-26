import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';
import ConfirmRoute from './ConfirmRoutes';
import ConfirmationFailure from '../components/entry-pages/ConfirmationFailure';
import ConfirmationSuccess from '../components/entry-pages/ConfirmationSuccess';
import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>

      <ConfirmRoute
        path="/auth/confirm/:confirmationCode"
        onSuccess={<ConfirmationSuccess />}
        onFailure={<ConfirmationFailure />}
      />
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
