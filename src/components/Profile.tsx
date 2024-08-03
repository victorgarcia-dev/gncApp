import LogoutButton from "./LogoutButton";


import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

const Profile = () => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <>
    <LogoutButton/>
    <ul>
      <li>Name: {user?.nickname}</li>
      <li>E-mail: {user?.email}</li>
    </ul>
    </>
    
  );
};

// Wrap the component in the withAuthenticationRequired handler
export default withAuthenticationRequired(Profile);