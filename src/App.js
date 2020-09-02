import React from 'react';
import './App.css';
import { LoginButton } from './components/LoginButton';
import { LogoutButton } from './components/LogoutButton';
import { Profile } from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { isLoading } = useAuth0()
  return (
    isLoading ? (<span>Loading...!</span>) : (<>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </>) 
  );
}

export default App;
