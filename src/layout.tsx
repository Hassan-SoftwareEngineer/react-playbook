import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout : React.FC = () => {
  return (
   <div>
      <nav className='text-white'>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
      </nav>
      <hr />
      <main>
            <Outlet />
      </main>
    </div>
  )
}

export default Layout;
