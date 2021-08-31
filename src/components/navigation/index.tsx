import React from 'react';

import Link from 'next/link';

import Button from '@components/button';
import Logo from '@components/logo';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
];

const NavBar = () => {
  return (
    <div className="bg-white absolute top-0 right-0 w-full h-20 flex px-32 py-6 items-center gap-20">
      <Logo />
      <div className="w-1/4 flex gap-4 row-reverse">
        {links.map(({ label, to }) => (
          <Link key={label} href={to}>
            <a
              href={to}
              className="px-4 flex items-center py-2 text-xl text-gray-900 no-underline"
            >
              {label}
            </a>
          </Link>
        ))}
      </div>
      <div className="flex ml-auto w-1/6">
        <Button label="Login" className="mr-4 w-1/2" />
        <Button
          label="Register"
          variant="primary-outline"
          className="mr-4 w-1/2"
        />
      </div>
    </div>
  );
};

export default NavBar;
