import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <div className='navbar'>
        <Link href=''><div className="logo"></div></Link>
        <a className='bar' href=''><svg  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></a>
        <div className='menu'>
        <a className='menuitem' href='/#Home'>Home</a>
        <a className='menuitem' href='/#Contact'>Contact</a>
        <a className='menuitem' href='/#About'>About</a>
        <a className='menuitem' href='/#Brand'>Projects</a>
        <Link className='menuitem' href='http://localhost/login-register/login.php'>Services</Link>
        </div>
    </div>
    </>
  )
}

export default Header