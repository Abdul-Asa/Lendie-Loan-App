import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';
import ConfirmRoute from './ConfirmRoutes';
import ConfirmationFailure from '../components/verification/ConfirmationFailure';
import ConfirmationSuccess from '../components/verification/ConfirmationSuccess';
import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import EmailConfirmation from '../pages/EmailConfirmation';
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

      <Route path="/about-us"></Route>
      <Route path="/why-lendie"></Route>
      <Route path="/FAQS"></Route>
      <Route path="/contact-us"></Route>
      <Route path="/email-confirmation">
        <EmailConfirmation />
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
