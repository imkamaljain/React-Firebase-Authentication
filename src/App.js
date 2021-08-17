import React from 'react';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard, Login, PrivateRoute, Register, ResetPassword, UpdateProfile } from './index';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "25rem" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/updateProfile" component={UpdateProfile} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/resetPassword" component={ResetPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}