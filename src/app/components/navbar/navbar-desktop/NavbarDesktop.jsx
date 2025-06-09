import { Logo, Options } from './components';

const NavbarDesktop = () => {
  return (
    <div className='w-[100%] h-[100%] container-nav-desk flex items-center justify-between'>
      <Logo />
      <Options />
    </div>
  );
};

export default NavbarDesktop;
