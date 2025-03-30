// import React, { useEffect, useState} from 'react'
// import './Navbar.css'
// import { Link } from 'react-scroll';
// import menu_icon from '../../assets/menu-icon.png'

// const Navbar = () => {
//   const [sticky, setSticky] = useState(false);
//   useEffect(() => {
//     window.addEventListener('scroll', () => {
//       window.scrollY > 50 ? setSticky(true) : setSticky(false)
//     })

//   }, []);

//   const [mobileMenu, setMobileMenu] = useState(false)

//   const toggleMenu = () => {
//     mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
//   }





//   return (
//     <div>
//         <nav className={`container ${sticky ? 'dark-nav' : ""}`}>
//             <h1 className='logo'>MD<span>GADGETS</span></h1>

//             <ul className={mobileMenu ? 'show' : 'hide-mobile-menu'}>
                

//                 <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
//                 <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
//                 <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
//                 <li><Link to='blog' smooth={true} offset={-260} duration={500}>Blog</Link></li>
//                 <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact<i className='ri-phone-fill'></i></Link></li>


                
//             </ul>

//             <img src={menu_icon} className='menu-icon' onClick={toggleMenu}/>
//         </nav>
      
//     </div>
//   )
// }

// export default Navbar


import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(prevState => !prevState);
  };

  const handleLinkClick = () => {
    setMobileMenu(false); 
  };

  return (
    <div>
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <h1 className='logo'>MD<span>GADGETS</span></h1>

        <ul className={mobileMenu ? 'show' : 'hide-mobile-menu'}>
          <li>
            <Link to='hero' smooth={true} offset={0} duration={500} onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to='programs' smooth={true} offset={-260} duration={500} onClick={handleLinkClick}>
              Services
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} offset={-150} duration={500} onClick={handleLinkClick}>
              About us
            </Link>
          </li>
          <li>
            <Link to='blog' smooth={true} offset={-260} duration={500} onClick={handleLinkClick}>
              Blog
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} offset={-260} duration={500} onClick={handleLinkClick}>
              Contact<i className='ri-phone-fill'></i>
            </Link>
          </li>
        </ul>

        <img src={menu_icon} className='menu-icon' onClick={toggleMenu} />
      </nav>
    </div>
  );
};

export default Navbar;







