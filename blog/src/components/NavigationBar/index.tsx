'use client';

import {
  NavigationBarContainer,
  Container,
  DetailsContainer,
  NavigationLeft,
  NavigationRight,
  NavigationBarContainerMobile
} from './NavigationBar.styled';
import Image from 'next/image';
import logoIcon from '../../app/logo.svg';
import { useState } from 'react';
import NavButton from '../NavButton';
import { Link } from '@mui/material';
import NavLink from '../NavLink';
const NavigationBar = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <nav>
        <NavigationBarContainer>
          <NavigationLeft>
            <NavLink to="/" title="Home" />
            <NavLink to="/" title="About" />
            <NavLink to="/" title="Contact" />
          </NavigationLeft>
          <NavigationBarContainerMobile>
            <a href="/" style={{ width: '7rem' }}>
              <Image
                src={logoIcon}
                alt="Logo"
                width={132}
                height={52}
                priority
                style={{ maxWidth: '100%', height: 'auto' }}
              ></Image>
            </a>
            <NavButton clicked={open} onClick={handleClick} />
          </NavigationBarContainerMobile>
          {open ? (
            <DetailsContainer>
              <NavLink to="/" title="Home" />
              <NavLink to="/" title="About" />
              <NavLink to="/" title="Contact" />
              <NavLink to="/" title="Pages" />
              <NavLink to="/" title="Free Version" />
              <NavLink to="/" title="Home" />
            </DetailsContainer>
          ) : null}
          {/* Computer View */}
          <NavigationRight>
            <NavLink to="/" title="Pages" />
            <NavLink to="/" title="Free Version" />
            <NavLink to="/" title="Home" />
          </NavigationRight>
        </NavigationBarContainer>
        {/* Computer View */}
      </nav>
    </Container>
  );
};

export default NavigationBar;
