import React from 'react';
import { StyledMenu } from './Style';
import { bool } from 'prop-types';
import styled from 'styled-components';

const MenuDescription = styled.span`
  font-size: 0.35em;
  color: #888;
  margin-top: 4px;
  display: block;
  width: 250px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: auto;
  }
  overflow-wrap: break-word;
  text-transform: none;
`;

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
        <MenuDescription>
        Selection of photos from around the world.
        </MenuDescription>
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