import React from 'react';
import { signOut } from '../firebase';
import { Form, Navbar, Button } from 'react-bootstrap';

const CurrentUser = ({ displayName, photoURL, children }) => {
  return (
    <>
      <Navbar.Collapse className="justify-content-end">
        {/* {photoURL && <img src={photoURL} alt={displayName} />} */}
        <Navbar.Text className="mr-sm-4">
          <a href="#login">{displayName}</a>
        </Navbar.Text>
      </Navbar.Collapse>
      <Form inline>
        <Button onClick={signOut} variant="outline-light">Sign Out</Button>
      </Form>
    </>
  );
};

CurrentUser.defaultProps = {
  displayName: 'Bill Murray',
  email: 'billmurray@mailinator.com',
  photoURL: 'https://www.fillmurray.com/300/300',
  createdAt: new Date(),
};

export default CurrentUser;