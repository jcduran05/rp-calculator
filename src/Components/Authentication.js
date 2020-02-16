import React, { useContext } from 'react';

import CurrentUser from './CurrentUser';
import SignInAndSignUp from './SignInAndSignUp';
import { UserContext } from '../Providers/UserProvider';

const Authentication = ({ loading }) => {
  const user = useContext(UserContext);

  if (loading) return null;

  return (
    <>
      { user ? <CurrentUser {...user} /> : <SignInAndSignUp /> }
    </>
  )
};

export default Authentication;