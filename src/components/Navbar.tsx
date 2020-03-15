import React from 'react';
import {Navbar} from 'react-bootstrap';

export const Header = () => {

  return (
      <Navbar bg="dark" variant='dark' expand='lg'>
          <Navbar.Brand >my-todo</Navbar.Brand>
      </Navbar>
  );
}
