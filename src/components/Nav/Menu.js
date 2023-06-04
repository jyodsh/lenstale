import React from 'react';
import { StyledMenu } from './Style';
import { bool } from 'prop-types';

const Menu = ({ open, ...props }) => {

  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        Blog
      </a>
      <a href="/stream" tabIndex={tabIndex}>
        Stream
      </a>
      <a href="/streets" tabIndex={tabIndex}>
        Streets
      </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;