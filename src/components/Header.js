import React from 'react';

// The Header component takes a 'name' prop and displays it as the title of the blog.
const Header = ({ name }) => {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
};

export default Header;
