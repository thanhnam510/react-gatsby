import React from 'react';
import { Link } from 'gatsby';

export const Home: React.FC = () => {
  return (
    <div>
      <div>Hello Gatsby!</div>
      <Link to="/about">About</Link>
      <Link to="/dash">Dash</Link>
    </div>
  );
};

export default Home;
