import { NAVIGATION_LIST } from '@/constants';
import NavBarMobile from './NavBarMobile';
import NavBarDesktop from './NavBarDesktop';

const NavBar = (): JSX.Element => {
  const HALF = Math.ceil(NAVIGATION_LIST.length / 2);

  return (
    <nav>
      <NavBarDesktop />
      <NavBarMobile />
    </nav>
  );
};

export default NavBar;
