import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch (err) {
      setError(err?.message);
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Welcome</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email Address:</strong> {currentUser.email}
          <Link to="/updateProfile" className="btn btn-primary w-100 mt-4">
            Update Details
          </Link>
          <Button className="btn-danger w-100 mt-3" onClick={handleLogout}>
            Log Out
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}
