import Account from "./Account";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="relative z-10 text-white py-2">
      <div className="flex items-center justify-between gap-10 mx-auto max-w-7xl h-16">
        <Logo />
        <Navigation />
        <Account />
      </div>
    </header>
  );
}

export default Header;
