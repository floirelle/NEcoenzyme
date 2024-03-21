import * as React from 'react';
import '@/app/globals.css';

export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {
  return (
    <header>
      <nav className='hidden md:block'>
        <ul className='px-20 flex gap-4'>
            <li>
                Menu
            </li>
            <li className='flex-1 text-center'>
                NEcoenzyme
            </li>
            <li>
                Cart
            </li>
            <li className='flex gap-4 items-center'>
              <i className="fa-solid fa-circle-user"></i>
              Log In
            </li>
        </ul>
      </nav>
    </header>
  );
}
