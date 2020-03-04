import React from 'react';
import classes from './Header.module.scss';

export const Header = () => {
  return (
    <header className={classes.header}>
      <h3>LOGO</h3>
      <ul className={classes.header__list}>
        <li>Features</li>
        <li>Pricing</li>
        <li>About</li>
      </ul>
    </header>
  );
};
