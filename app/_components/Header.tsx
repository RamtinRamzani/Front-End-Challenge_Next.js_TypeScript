// import Account from "./Account";
import Logo from "./Logo";
import Navigation from "./nav/Navigation";

function Header() {
  return (
    <header className="relative z-10 text-white lg:py-2 py-1 px-2">
      <div className="flex md:flex-row-reverse items-center justify-between lg:gap-10 mx-auto max-w-7xl lg:h-16 h-12">
        <Navigation />
        <Logo />
        {/* <Account /> */}
      </div>
    </header>
  );
}

export default Header;
