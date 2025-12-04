import Logo from "./navBar/Logo";
import NavLinks from "./navBar/NavLinks";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between p-4 lg:pt-10 lg:pl-20 lg:pr-20">
      <div className="flex items-center">
        <Logo />
        <p className="text-[#2A2A2A] font-[800] text-[20px] font-inter">
          Tesbious
        </p>
      </div>
      <div className="hidden lg:grid">
        <NavLinks />
      </div>
    </div>
  );
}
