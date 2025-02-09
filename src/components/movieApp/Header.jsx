import { BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between">
        <div className="nav__left">
          <a href="/">
            <span className="text-2xl uppercase font-bold tracking-tight">
              Calm
            </span>
          </a>
        </div>
        <div className="nav__right relative flex items-center">
          <input
            type="text"
            className="h-8 rounded-md outline-none px-2 placeholder-white/50"
            placeholder="Search..."
          />
          <span className="absolute right-0 mx-2 border-l-1 border-slate-700 p-1 ">
            <BiSearch />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
