import React from 'react';
import { StyledMenu } from './Style';
import { bool } from 'prop-types';

const Menu = ({ open, ...props }) => {

  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>

      <a href="/" tabIndex={tabIndex}>
        ::.Lens Tale
      </a>
      <a href="/stream" tabIndex={tabIndex}>
        Stream
      </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;