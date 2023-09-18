'use client';

import {
  NavigationBarWrapper,
  Container,
  DetailsWrapper,
  NavigationLeft,
  NavigationRight,
  NavigationBarWrapperMobile
} from './NavigationBar.styled';
import Image from 'next/image';
import logoIcon from '../../app/logo.svg';
import { lazy, useState } from 'react';
import { NAVIGATION_LIST } from '../../constants/navigation';

const NavLink = lazy(() => import('../NavLink'));
const NavButton = lazy(() => import('../NavButton'));

const NavigationBar = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const HALF = Math.ceil(NAVIGATION_LIST.length / 2);

  return (
    <Container>
      <nav>
        <NavigationBarWrapper>
          <NavigationLeft>
            {NAVIGATION_LIST.slice(0, HALF).map((e, i) => {
              return <NavLink key={i} to={e.to} title={e.title} />;
            })}
          </NavigationLeft>
          <NavigationBarWrapperMobile>
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
          </NavigationBarWrapperMobile>
          {open ? (
            <DetailsWrapper>
              {NAVIGATION_LIST.map((e, i) => {
                return <NavLink key={i} to={e.to} title={e.title} />;
              })}
            </DetailsWrapper>
          ) : null}
          <NavigationRight>
            {NAVIGATION_LIST.slice(HALF).map((e, i) => {
              return <NavLink key={i} to={e.to} title={e.title} />;
            })}
          </NavigationRight>
        </NavigationBarWrapper>
      </nav>
    </Container>
  );
};

export default NavigationBar;
