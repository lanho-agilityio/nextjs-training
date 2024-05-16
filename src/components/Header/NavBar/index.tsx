import NavBarMobile from './NavBarMobile';
import NavBarDesktop from './NavBarDesktop';

const NavBar = (): JSX.Element => {
  return (
    <nav>
      <NavBarDesktop />
      <NavBarMobile />
    </nav>
  );
};

export default NavBar;
