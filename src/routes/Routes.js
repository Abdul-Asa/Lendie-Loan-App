import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';
import ConfirmRoute from './ConfirmRoutes';
import ConfirmationFailure from '../components/verification/ConfirmationFailure';
import ConfirmationSuccess from '../components/verification/ConfirmationSuccess';
import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Team from '../pages/Team';
import EmailConfirmation from '../pages/EmailConfirmation';
import Signup from '../pages/Signup';
import ForgotPassword from '../pages/ForgotPassword';

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

      <Route path="/about-us">
        <Team />
      </Route>

      <Route path="/email-confirmation">
        <EmailConfirmation />
      </Route>

      <Route path="/forgot-password">
        <ForgotPassword />
      </Route>

      <ConfirmRoute
        path="/auth/confirm/:confirmationCode"
        onSuccess={<ConfirmationSuccess />}
        onFailure={<ConfirmationFailure />}
      />
      <PrivateRoute path="/user/home">
        <Dashboard />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
