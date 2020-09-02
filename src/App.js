import React from 'react';
import './App.css';
import { LoginButton } from './components/LoginButton';
import { LogoutButton } from './components/LogoutButton';
import { Profile } from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react'
import CircleLoader from 'react-spinners/CircleLoader'

function App() {
  const { isLoading } = useAuth0()
  return (
    isLoading ? <CircleLoader /> : (<>
      <LoginButton />
      <LogoutButton />
      <Profile />
      </>)
  );
}

export default App;
