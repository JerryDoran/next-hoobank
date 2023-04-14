import { useState } from 'react';
import { navLinks } from '../constants';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img
        src="https://raw.githubusercontent.com/adrianhajdin/project_hoobank/45b4958981ea82423693f6f31524ec8ef08651cb/src/assets/logo.svg"
        alt="hoobank"
        className="w-[124px] h-[32px]"
      />
      <ul className="list-none sm:flex space-x-10 hidden justify-end items-center flex-1">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-gray-200`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={
            toggle
              ? 'https://raw.githubusercontent.com/adrianhajdin/project_hoobank/45b4958981ea82423693f6f31524ec8ef08651cb/src/assets/close.svg'
              : 'https://raw.githubusercontent.com/adrianhajdin/project_hoobank/45b4958981ea82423693f6f31524ec8ef08651cb/src/assets/menu.svg'
          }
          alt="moble menu"
          className="cursor-pointer w-[24px] h-[24px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        {/* Mobile Menu */}
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col space-y-10 justify-end items-center flex-1">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-gray-200`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
